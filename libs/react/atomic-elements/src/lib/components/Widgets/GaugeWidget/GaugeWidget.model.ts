import { VizCommonParams } from '@kleeen/types';

export interface GaugeWidgetProps extends VizCommonParams {
  taskName: string;
  widgetId: string | number;
}
