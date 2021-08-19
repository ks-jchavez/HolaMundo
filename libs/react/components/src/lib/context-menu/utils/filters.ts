import { AggregationType, DataPoint, DataPointWithFormattedValue, Filters } from '@kleeen/types';
import { LibraryWidget, WidgetScope } from '@kleeen/widgets';

import { isSingleCardinalityTransformation } from '@kleeen/frontend/utils';

interface GetWidgetsWithFiltersProps {
  contextDataPoints: DataPoint[];
  dataPoint: DataPoint;
  scope: WidgetScope;
  widgets: LibraryWidget[];
}

interface WidgetsWithFilters {
  widgetsWithDefaultFilters: LibraryWidget[];
  widgetsWithContextFilters: LibraryWidget[];
}

export function getWidgetsWithFilters({
  contextDataPoints,
  dataPoint,
  scope,
  widgets,
}: GetWidgetsWithFiltersProps): WidgetsWithFilters {
  const defaultFilters = getDefaultFilters({ dataPoint, scope });
  const contextFilters = getContextFilters({
    contextDataPoints,
  });
  return {
    widgetsWithContextFilters: widgets.map(
      mapFilterToWidget({
        filtersToApply: {
          ...defaultFilters,
          ...contextFilters,
        },
      }),
    ),
    widgetsWithDefaultFilters: widgets.map(
      mapFilterToWidget({
        filtersToApply: {
          ...defaultFilters,
        },
      }),
    ),
  };
}

//#region Private Members
interface GetFiltersProps {
  contextDataPoints: DataPoint[];
}

function getContextFilters({ contextDataPoints }: GetFiltersProps): Filters {
  const filters = contextDataPoints
    .filter((dataPoint) => {
      return isSingleCardinalityTransformation(dataPoint.attribute.aggregation as AggregationType);
    })
    .reduce((acc: Filters, dataPoint) => {
      acc[dataPoint.attribute.name] = dataPoint.value.id;

      return acc;
    }, {});

  return filters;
}

interface GetDefaultFiltersProps {
  dataPoint: DataPoint;
  scope: WidgetScope;
}

function getDefaultFilters({ dataPoint, scope }: GetDefaultFiltersProps): Filters {
  if (scope !== WidgetScope.Single) {
    return {};
  }
  return {
    [dataPoint.attribute.name]: dataPoint.value.id,
  };
}

interface MapFilterToWidgetProps {
  filtersToApply: Filters;
}

function mapFilterToWidget({
  filtersToApply,
}: MapFilterToWidgetProps): (widget: LibraryWidget) => LibraryWidget {
  return (widget: LibraryWidget) => {
    return {
      ...widget,
      params: {
        ...widget?.params,
        filters: {
          ...widget?.params?.filters,
          ...filtersToApply,
        },
      },
    };
  };
}
//#endregion
