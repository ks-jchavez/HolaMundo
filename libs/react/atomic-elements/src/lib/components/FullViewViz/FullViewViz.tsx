import CardTitle01 from '../CardTitle01/CardTitle01';
import FullAreaCardWidget01 from '../FullAreaCardWidget01/FullAreaCardWidget01';
import H3Title01 from '../H3Title01/H3Title01';
import { ReactElement } from 'react';
import Visualization from '../Visualization/Visualization';
import { Widget } from '@kleeen/types';
import WidgetSection03 from '../WidgetSection03/WidgetSection03';
import classnames from 'classnames';

const bem = 'ks-full-view-viz';

export interface FullViewVizProps {
  taskName: string;
  widget: Widget;
}

const FullViewViz = (props: FullViewVizProps): ReactElement => {
  const { widget } = props;

  return (
    <FullAreaCardWidget01 key={widget.id}>
      <CardTitle01>
        <H3Title01>
          <div className={classnames(`${bem}__title`)}>{widget.title}</div>
        </H3Title01>
      </CardTitle01>

      <WidgetSection03>
        <Visualization widget={widget} taskName={props.taskName} />
      </WidgetSection03>
    </FullAreaCardWidget01>
  );
};

export default FullViewViz;
