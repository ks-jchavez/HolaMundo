import './Pie.scss';

import { clone, pathOr } from 'ramda';
import { drillUp, getRadialSharedOptions } from '../../utils';
import { KsButton, Loader } from '@kleeen/react/components';
import { KUIConnect } from '@kleeen/core-react';
import { useRadialDataParser } from '../../hooks/useRadialDataParser';
import classnames from 'classnames';
import drilldown from 'highcharts/modules/drilldown';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import merge from 'lodash.merge';
import React from 'react';

const bem = 'ks-pie-chart';

drilldown(Highcharts);

function PieBase(props: HighchartsReact.Props): React.ReactElement {
  const parsedRadialData = useRadialDataParser(props);

  const isLoading = pathOr(true, ['context', 'isLoading']);
  if (isLoading(props)) {
    return <Loader />;
  }

  const {
    backButtonRef,
    containerProps,
    highchartState: { highChartUpdate, setHighChartUpdate },
    localization,
  } = parsedRadialData;

  const baseOptions = getRadialSharedOptions(parsedRadialData);
  const pieOptions: Highcharts.Options = {
    plotOptions: {
      pie: {
        innerSize: 0,
      },
    },
  };
  const options = merge({}, baseOptions, pieOptions);

  return (
    <div className={classnames(bem, 'High-charts')}>
      <div ref={backButtonRef} className={classnames(`${bem}__back`, 'back-to')}>
        <KsButton
          onClick={() => {
            drillUp({ backButtonRef, highChartUpdate });
          }}
        >
          ◁ {localization.backTo}
        </KsButton>
      </div>
      <HighchartsReact
        containerProps={containerProps}
        highcharts={Highcharts}
        options={clone(options)}
        {...props}
        callback={(e) => {
          setHighChartUpdate(e);
        }}
      />
    </div>
  );
}

const Pie = React.memo(KUIConnect(({ translate }) => ({ translate }))(PieBase));
export { Pie, Pie as default };
