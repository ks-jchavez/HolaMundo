import { AggregationType, DataPointWithFormattedValue, ReactElement, Widget } from '@kleeen/types';
import { LibraryWidget, WidgetScope, entityHasWidgets, getWidgetsByEntity } from '@kleeen/widgets';
import { PreviewPanel, usePreviewPanel } from '@kleeen/react/hooks';
import { isSameAttribute, isSingleCardinalityTransformation } from '@kleeen/frontend/utils';
import { useEffect, useState } from 'react';

import { ContextMenuSectionItem } from '../context-menu.model';
import { DEFAULT_TRANSFORMATION_KEY_TO_USE } from '../utils';
import { Translate } from '@kleeen/core-react';
import { getWidgetsWithFilters } from '../utils/filters';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { path } from 'ramda';

interface GetPreviewSectionProps {
  dataPoints: DataPointWithFormattedValue[];
  dataPointsToShow: DataPointWithFormattedValue[];
  handleClose: () => void;
}

export function usePreviewSections({
  dataPoints,
  dataPointsToShow,
  handleClose,
}: GetPreviewSectionProps): ContextMenuSectionItem[] {
  const previewPanel = usePreviewPanel();
  const [previewSections, setPreviewSections] = useState<ContextMenuSectionItem[]>([]);

  useEffect(() => {
    if (isNilOrEmpty(dataPointsToShow)) {
      return;
    }

    const tempPreviewSections = dataPointsToShow.reduce((acc: ContextMenuSectionItem[], dataPointToShow) => {
      const previewItems = getPreviewItems({
        dataPointToShow,
        dataPoints,
      });

      if (isNilOrEmpty(previewItems)) {
        return acc;
      }

      const previewSection = {
        key: 'preview',
        label: (
          <Translate
            id="app.contextMenu.preview"
            type="html"
            values={{
              entity: dataPointToShow.attribute.name,
            }}
          />
        ),
        menuItems: previewItems.map((previewItem) => {
          return {
            handleClick: getClickHandler({
              handleClose,
              item: previewItem,
              previewPanel,
            }),
            key: `preview.${previewItem.scope}`,
            label: previewItem.label,
            roleAccessKey: `preview.${previewItem.scope}`,
          };
        }),
      };
      acc.push(previewSection);

      return acc;
    }, []);

    setPreviewSections(tempPreviewSections);
  }, [dataPointsToShow?.length]);

  return previewSections;
}

//#region Private members
interface PreviewMenuItemProps {
  handleClose: () => void;
  item: PreviewItem;
  previewPanel: PreviewPanel;
}

function getClickHandler({ handleClose, item, previewPanel }: PreviewMenuItemProps) {
  const { widgets, previewTitle } = item;
  return () => () => {
    handleClose();
    previewPanel.setPreviewWidgets(widgets as Widget[]);
    previewPanel.openPreviewPanel(previewTitle);
  };
}

function getContextDataPoints({
  dataPointToShow,
  dataPoints,
}: {
  dataPointToShow: DataPointWithFormattedValue;
  dataPoints: DataPointWithFormattedValue[];
}): DataPointWithFormattedValue[] {
  return dataPoints.filter((dataPoint) => {
    return (
      !isSameAttribute(dataPointToShow.attribute, dataPoint.attribute) &&
      isSingleCardinalityTransformation(dataPoint.attribute.aggregation as AggregationType)
    );
  });
}

interface GetPreviewItemsProps {
  dataPointToShow: DataPointWithFormattedValue;
  dataPoints: DataPointWithFormattedValue[];
}

interface PreviewItem {
  label: ReactElement;
  previewTitle: ReactElement;
  scope: WidgetScope;
  widgets: LibraryWidget[];
}

function getPreviewItems({ dataPointToShow, dataPoints }: GetPreviewItemsProps): PreviewItem[] {
  const { attribute, formattedValue, value } = dataPointToShow;

  const contextDataPoints = getContextDataPoints({
    dataPointToShow,
    dataPoints,
  });

  // TODO @cafe THIS MUST BE REMOVED ONCE WE GET RID OF THE AGGREGATION VS TRANSFORMATION DILEMMA.
  const { transformationKeyToUse = DEFAULT_TRANSFORMATION_KEY_TO_USE } = dataPointToShow;
  const attributeTransformation = path<AggregationType>([transformationKeyToUse], attribute);

  const isSingleCardinality = isSingleCardinalityTransformation(attributeTransformation);
  const scope = isSingleCardinality ? WidgetScope.Single : WidgetScope.Collection;
  const entityId = attribute.id;

  if (scope === WidgetScope.Single && isNilOrEmpty(value.id)) {
    return [];
  }

  const showPreview = entityHasWidgets({
    entityId,
    scope,
  });

  if (!showPreview) {
    return;
  }

  const widgets = getWidgetsByEntity({
    entityId,
    scope,
  });
  const { widgetsWithContextFilters, widgetsWithDefaultFilters } = getWidgetsWithFilters({
    contextDataPoints,
    dataPoint: dataPointToShow,
    scope,
    widgets,
  });

  // TODO: @cafe Handle more than 1 context data point in the future (i.e.: 3 data points)
  const [firstContextDataPoint] = contextDataPoints;
  const filteredBy = firstContextDataPoint?.value.displayValue;
  const filteredByEntity = firstContextDataPoint?.attribute.name;

  const values = {
    entity: attribute.name,
    filteredBy: filteredBy || filteredByEntity,
    filteredByEntity,
    value: formattedValue,
  };

  if (scope === WidgetScope.Single) {
    const singlePreviewItems: PreviewItem[] = [
      {
        label: <Translate id="app.contextMenu.preview.single" type="html" values={values} />,
        previewTitle: <Translate id="app.previewLayout.singleTitle" type="html" values={values} />,
        scope,
        widgets: widgetsWithDefaultFilters,
      },
    ];
    if (!isNilOrEmpty(firstContextDataPoint)) {
      singlePreviewItems.push({
        label: <Translate id="app.contextMenu.preview.singleFiltered" type="html" values={values} />,
        previewTitle: <Translate id="app.previewLayout.singleTitleFiltered" type="html" values={values} />,
        scope,
        widgets: widgetsWithContextFilters,
      });
    }
    return singlePreviewItems;
  } else {
    const collectionPreviewItems: PreviewItem[] = [
      {
        label: <Translate id="app.contextMenu.preview.collection" type="html" values={values} />,
        previewTitle: <Translate id="app.previewLayout.collectionTitle" type="html" values={values} />,
        scope: WidgetScope.Collection,
        widgets: widgetsWithDefaultFilters,
      },
    ];
    if (!isNilOrEmpty(contextDataPoints)) {
      collectionPreviewItems.push({
        label: <Translate id="app.contextMenu.preview.collectionFiltered" type="html" values={values} />,
        previewTitle: (
          <Translate id="app.previewLayout.collectionTitleFiltered" type="html" values={values} />
        ),
        scope: WidgetScope.Collection,
        widgets: widgetsWithContextFilters,
      });
    }
    return collectionPreviewItems;
  }
}
//#endregion
