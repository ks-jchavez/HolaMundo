import { Attribute, GroupByProps, ValueProp, ValuesProps, VizCommonParams } from '@kleeen/types';

export interface BubbleChartWidgetProps extends VizCommonParams {
  attributes?: Attribute[];
  disableHeightCalculation?: boolean;
  params: {
    baseModel: string;
    aggregatedByType?: string;
    aggregatedBy?: string;
    aggregation_attribute?: string;
    aggregation?: string;
    groupBy?: GroupByProps;
    value?: ValueProp | ValuesProps;
  };
  taskName: string;
  widgetId: string | number;
}
