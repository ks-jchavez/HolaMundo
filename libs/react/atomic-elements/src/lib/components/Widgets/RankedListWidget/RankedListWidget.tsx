import { Attribute, GroupByProps, ValueProp, ValuesProps, VizCommonParams } from '@kleeen/types';
import { KsRankedListItem, SimpleList } from '@kleeen/react/components';
import { formatDataList, formatSeverity, parseAttributes } from '@kleeen/frontend/utils';

import { makeStyles } from '@material-ui/core';
import { useWidgetContext } from '@kleeen/react/hooks';

const useStyles = makeStyles({
  widgetContent: {
    height: 'calc(var(--wh-5XL) - var(--wh-1XS) - var(--wh-6XS) - var(--wh-6XS))',
    // Table widgets are the only type of widgets that need to ignore the card-content imposed padding
    margin: '0 calc(-1 * var(--pm-L))',
  },
});
export interface RankedListWidgetProps extends VizCommonParams {
  attributes?: Attribute[];
  params: {
    aggregatedBy?: string;
    aggregatedByType?: string;
    aggregation_attribute?: string;
    aggregation?: string;
    baseModel: string;
    groupBy?: GroupByProps;
    value?: ValueProp | ValuesProps;
  };
  taskName: string;
  widgetId: string | number;
}

export const RankedListWidget = ({
  attributes,
  params,
  taskName,
  widgetId,
}: RankedListWidgetProps): JSX.Element => {
  const widgetData = useWidgetContext({ taskName, widgetId, params }) || { data: {} };
  const { format, crossLinking, results } = widgetData.data || {};
  const listColumns = parseAttributes(attributes, format);
  const hideHeader = false;
  const { data, metadata } = formatDataList({ crossLinking, results, format, params, includeMinMax: true });
  const newWidgetData = {
    isLoading: false,
    ...widgetData,
    data,
    format: formatSeverity(format, params),
  };
  const classes = useStyles();

  return (
    <div className={classes.widgetContent}>
      <SimpleList
        columns={listColumns}
        data={newWidgetData.data}
        hideHeader={hideHeader}
        listOptions={{
          ListItemComponent: KsRankedListItem,
          sortBy: metadata?.valueColumnName,
        }}
        metadata={metadata}
      />
    </div>
  );
};

export default RankedListWidget;
