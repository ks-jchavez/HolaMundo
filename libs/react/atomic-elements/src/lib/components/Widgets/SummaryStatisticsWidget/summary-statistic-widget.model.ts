import { Attribute, VizCommonParams } from '@kleeen/types';

import { Key } from 'react';

export interface SummaryStatisticsWidgetProps extends VizCommonParams {
  attributes?: Attribute[];
  taskName: string;
  widgetId: Key;
}
