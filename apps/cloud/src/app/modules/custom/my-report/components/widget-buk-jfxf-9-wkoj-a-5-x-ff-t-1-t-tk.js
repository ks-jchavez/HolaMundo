import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function WidgetBukJfxf9WkojA5XFfT1TTk({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(WidgetBukJfxf9WkojA5XFfT1TTk);
