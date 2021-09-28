import { KsSubNav, KsTitle } from '@kleeen/react/components';

import { WidgetHeaderProps } from './widget-header.model';
import { useStyles } from './widget-header.styles';

export function WidgetHeader({ centerSection, endSection, title }: WidgetHeaderProps) {
  const classes = useStyles();

  return (
    <div className={classes.widgetHeader}>
      <KsSubNav
        centerSection={centerSection}
        endSection={endSection}
        startSection={{
          sections: [
            {
              component: <KsTitle className={classes.widgetHeaderTitle} title={title} />,
              endSeparator: true,
            },
          ],
        }}
      />
    </div>
  );
}
