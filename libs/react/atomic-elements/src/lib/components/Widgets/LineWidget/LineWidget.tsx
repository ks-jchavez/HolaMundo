import Line from '../../Line/Line';
import { Loader } from '@kleeen/react/components';
import { WidgetProps } from '@kleeen/types';
import { makeStyles } from '@material-ui/core';
import { useWidgetContext } from '@kleeen/react/hooks';

const useStyles = makeStyles({
  widgetContent: {
    height: 'calc(var(--wh-5XL) - var(--wh-1XS) - var(--wh-6XS) - var(--wh-6XS))',
  },
});

export function LineWidget({ attributes, params, taskName, widgetId }: WidgetProps): JSX.Element {
  const widgetData = useWidgetContext({
    taskName,
    widgetId,
    params,
  });
  const classes = useStyles();

  if (!widgetData) {
    return <Loader />;
  }

  return (
    <div className={classes.widgetContent}>
      <Line attributes={attributes} context={widgetData} params={params} widgetId={widgetId} />
    </div>
  );
}

export default LineWidget;
