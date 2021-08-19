import { ReactElement, useEffect } from 'react';
import { useMasonry, useWidgetContext } from '@kleeen/react/hooks';

import { Loader } from '@kleeen/react/components';
import { SummaryStatistics } from '../../summary-statistics';
import { SummaryStatisticsWidgetProps } from './summary-statistic-widget.model';

export function SummaryStatisticsWidget({
  attributes,
  params,
  taskName,
  widgetId,
}: SummaryStatisticsWidgetProps): ReactElement {
  const widgetData = useWidgetContext({ taskName, widgetId, params });
  const { updateLayout } = useMasonry();

  const { data, isLoading } = widgetData;

  useEffect(() => {
    const minCardHeight = 60;
    updateLayout(minCardHeight);
  }, [widgetData]);

  if (isLoading) {
    return <Loader />;
  }

  return <SummaryStatistics attributes={attributes} data={data} />;
}

export default SummaryStatisticsWidget;
