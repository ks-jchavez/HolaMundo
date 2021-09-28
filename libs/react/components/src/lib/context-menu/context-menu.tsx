import {
  AggregationType,
  ContextMenuDefaultSectionOrder,
  ContextMenuInvestigationSectionOrder,
} from '@kleeen/types';
import { ContextMenuProps, FormattedContextDataPoint } from './context-menu.model';
import { Menu, MenuTitle } from './contextual-menu.style';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useHoverIntent, useIsInvestigation, useTheme } from '@kleeen/react/hooks';

import { DEFAULT_TRANSFORMATION_KEY_TO_USE } from './utils';
import { contextMenuComponentBySection } from './components';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { isSingleCardinalityTransformation } from '@kleeen/frontend/utils';
import { path } from 'ramda';
import { useDataPointsWithFormattedValue } from './hooks';

export function KsContextMenu({ anchorEl, autoClose, dataPoints, handleClose, widgetId }: ContextMenuProps) {
  const formattedDataPoints = useDataPointsWithFormattedValue({ dataPoints });
  const { ref } = useHoverIntent<HTMLUListElement>({
    delayOnEnter: 0,
    onMouseEnterFn: clearTimeOut,
    onMouseLeaveFn: handleClose,
  });
  const timerRef = useRef(null);
  const [dataPointsToShow, setDataPointsToShow] = useState<FormattedContextDataPoint[]>([]);
  const [menuTitle, setMenuTitle] = useState<ReactNode>();
  const { themeClass } = useTheme();
  const isInvestigationPage = useIsInvestigation();

  // TODO: @cafe Include the preview option here as well
  const sectionsToShow = isInvestigationPage
    ? ContextMenuInvestigationSectionOrder
    : ContextMenuDefaultSectionOrder;

  useEffect(() => {
    if (autoClose) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, 2000);

      return () => {
        clearTimeout(timerRef.current);
      };
    }
  }, []);

  useEffect(() => {
    if (isNilOrEmpty(dataPoints)) {
      return;
    }

    const tempFilteredDataPoints = formattedDataPoints
      .filter(({ ignoreInContextMenu = false }) => !ignoreInContextMenu)
      .sort((a, b) => {
        const aCardinalityWeight = Number(
          isSingleCardinalityTransformation(a.attribute.aggregation as AggregationType),
        );
        const bCardinalityWeight = Number(
          isSingleCardinalityTransformation(b.attribute.aggregation as AggregationType),
        );
        return bCardinalityWeight - aCardinalityWeight;
      });

    setDataPointsToShow(tempFilteredDataPoints);
  }, [formattedDataPoints?.length]);

  useEffect(() => {
    if (isNilOrEmpty(dataPointsToShow)) {
      return;
    }

    const [firstDataPoint] = dataPointsToShow;
    // TODO @cafe THIS MUST BE REMOVED ONCE WE GET RID OF THE AGGREGATION VS TRANSFORMATION DILEMMA.
    const { transformationKeyToUse = DEFAULT_TRANSFORMATION_KEY_TO_USE } = firstDataPoint;
    const attributeTransformation = path<AggregationType>([transformationKeyToUse], firstDataPoint.attribute);
    const isSingleCardinality = isSingleCardinalityTransformation(attributeTransformation);

    const newMenuTitle = `${firstDataPoint.formattedValue} ${
      !isSingleCardinality ? firstDataPoint.attribute.name : ''
    }`;
    setMenuTitle(newMenuTitle);
  }, [dataPointsToShow?.length]);

  function clearTimeOut() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  return (
    <Menu
      MenuListProps={{ ref }}
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'center',
      }}
      className={themeClass}
      data-testid="context-menu"
      getContentAnchorEl={null}
      id="context-menu"
      onClose={handleClose}
      open={Boolean(anchorEl)}
    >
      <MenuTitle>{menuTitle}</MenuTitle>
      {sectionsToShow.map((sectionToShow) => {
        const SectionComponent = contextMenuComponentBySection[sectionToShow];

        if (isNilOrEmpty(SectionComponent)) {
          return;
        }

        return (
          <SectionComponent
            dataPoints={formattedDataPoints}
            dataPointsToShow={dataPointsToShow}
            handleClose={handleClose}
            key={sectionToShow}
            widgetId={widgetId}
          />
        );
      })}
    </Menu>
  );
}
