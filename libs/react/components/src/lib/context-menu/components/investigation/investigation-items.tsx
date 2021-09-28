import {
  AggregationType,
  DataPointWithFormattedValue,
  Filters,
  InvestigationDataPoint,
  ReactElement,
  WidgetScope,
} from '@kleeen/types';
import { getContextDataPoints, getFiltersForDataPoints } from '@kleeen/investigations';

import { DEFAULT_TRANSFORMATION_KEY_TO_USE } from '../../utils';
import { Translate } from '@kleeen/core-react';
import { entityHasWidgets } from '@kleeen/widgets';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { isSingleCardinalityTransformation } from '@kleeen/frontend/utils';
import { path } from 'ramda';

export interface GetInvestigationItemsProps {
  dataPoint: DataPointWithFormattedValue;
  dataPoints: DataPointWithFormattedValue[];
  paramsBasedOnRoute: Filters;
}

export interface InvestigationItem {
  investigationDataPoint: InvestigationDataPoint;
  investigationFilters: Filters;
  label: ReactElement;
  pageFilters: Filters;
}

export function getInvestigationItems({
  dataPoint,
  dataPoints,
  paramsBasedOnRoute,
  translationProps,
}: GetInvestigationItemsProps & {
  translationProps: {
    filtered: string;
    noFiltered: string;
  };
}): InvestigationItem[] {
  const { attribute, formattedValue, value } = dataPoint;

  // TODO @cafe THIS MUST BE REMOVED ONCE WE GET RID OF THE AGGREGATION VS TRANSFORMATION DILEMMA.
  const { transformationKeyToUse = DEFAULT_TRANSFORMATION_KEY_TO_USE } = dataPoint;
  const attributeTransformation = path<AggregationType>([transformationKeyToUse], attribute);
  const isSingleCardinality = isSingleCardinalityTransformation(attributeTransformation);
  const scope = isSingleCardinality ? WidgetScope.Single : WidgetScope.Collection;
  const entityId = attribute.id;

  if (scope === WidgetScope.Single && isNilOrEmpty(value?.id)) {
    return [];
  }

  const showInvestigations = entityHasWidgets({
    entityId: attribute.id,
    scope,
  });

  if (!showInvestigations) {
    return [];
  }

  const contextDataPoints = getContextDataPoints({
    dataPointToShow: dataPoint,
    dataPoints,
  });
  const { contextFilters, defaultFilters } = getFiltersForDataPoints({
    contextDataPoints,
    dataPoint,
    scope,
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

  const investigationItems: InvestigationItem[] = [
    {
      investigationDataPoint: {
        entityId,
        scope,
      },
      investigationFilters: {
        ...defaultFilters,
      },
      pageFilters: paramsBasedOnRoute,
      label: <Translate id={translationProps.noFiltered} type="html" values={values} />,
    },
  ];

  if (!isNilOrEmpty(firstContextDataPoint)) {
    investigationItems.push({
      investigationDataPoint: {
        entityId,
        scope,
      },
      investigationFilters: {
        ...defaultFilters,
        ...contextFilters,
      },
      pageFilters: paramsBasedOnRoute,
      label: <Translate id={translationProps.filtered} type="html" values={values} />,
    });
  }

  return investigationItems;
}
