import './CardSection.scss';

import { CardTitle } from './components/CardTitle';
import { CardWidgetProps } from './CardWidget.model';
import { MasonryProvider } from '@kleeen/react/hooks';
import { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

const bem = 'ks-card-widget';

export const CardWidget = ({
  children,
  disabled,
  disableHeightCalculation,
  hideTitle,
  icon,
  selectedViz,
  title,
  widgetSelector = null,
}: CardWidgetProps): JSX.Element => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [spans, setSpans] = useState(0);

  // Styles
  const cardStyle = {
    gridAutoRows: 10,
    height: 42,
    imgOffset: 24,
    marginBottom: 16,
  };

  const cardSpan = {
    gridRowEnd: `span ${spans}`,
  };

  // Logic
  const updateLayout = (contentHeight: number): void => {
    const newSpansVal = Math.ceil(
      (contentHeight + cardStyle.height + cardStyle.marginBottom) / cardStyle.gridAutoRows,
    );
    setSpans(() => newSpansVal);
  };

  useEffect(() => {
    if (!disableHeightCalculation) {
      // TODO @cafe single column widgets do not require height calculation
      // Look for a masonry solution where we don't do this manually
      updateLayout(contentRef.current.clientHeight);
    }
  }, [disableHeightCalculation, selectedViz, spans, children]);

  const handleImageLoad = (event): void => {
    updateLayout(event.target.clientHeight + cardStyle.imgOffset);
  };

  return (
    <div
      className={classnames(bem, 'card-widget', { disabled })}
      style={!disableHeightCalculation ? cardSpan : {}}
    >
      {!hideTitle && <CardTitle title={title} icon={icon} />}
      <div className={classnames(`${bem}__content`, 'content')} ref={contentRef} onLoad={handleImageLoad}>
        <MasonryProvider updateLayout={updateLayout}>{children}</MasonryProvider>
        {widgetSelector}
      </div>
    </div>
  );
};

export default CardWidget;
