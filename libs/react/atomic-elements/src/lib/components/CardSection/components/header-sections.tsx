import { AggregationType, GenericFunctions, StatisticalDataType, Widget } from '@kleeen/types';
import { getAttributeFromName, sdtMatchesRule } from '@kleeen/frontend/utils';

import GranularityDropdown from './granularity-dropdown/granularity-dropdown';
import { SectionComponentType } from './widget-header/widget-header.model';
import { isNilOrEmpty } from '@kleeen/common/utils';

interface GetWidgetHeadersProps {
  actions: GenericFunctions;
  widget: Widget;
}

interface GetWidgetHeadersResult {
  endSections: SectionComponentType[];
}

export function getWidgetHeaders({ actions, widget }: GetWidgetHeadersProps): GetWidgetHeadersResult {
  const endSections = [];

  function onSelectGranularity(bucket) {
    if (actions) {
      actions.setGroupBy({
        bucket,
        transformation: bucket ? AggregationType.TemporalBucket : widget.params.groupBy.transformation,
      });
    }
  }
  const groupByAttribute = getAttributeFromName({
    attributeName: widget.params.groupBy?.name,
    widget,
  });
  if (!isNilOrEmpty(groupByAttribute)) {
    const groupByIsTemporal = sdtMatchesRule({
      sdt: groupByAttribute.statisticalType,
      rule: StatisticalDataType.NumericTemporal,
    });
    if (groupByIsTemporal) {
      endSections.push({
        component: <GranularityDropdown onSelectGranularity={onSelectGranularity} />,
        endSeparator: false,
      });
    }
  }

  return {
    endSections,
  };
}
