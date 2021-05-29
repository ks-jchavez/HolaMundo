import { useEffect, useRef, useState } from 'react';

import { DisplayElement } from '../display-element';
import { InputElement } from '../input-element';
import MuiTooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './summary-panel.styles';

export function KsSummaryPanel({
  isEditing,
  entityDetails,
  layoutProps = {
    columnGap: 55,
    containerPadding: 68,
    keyValuePadding: 21,
    keyWidth: 144,
    valueWidth: 233,
  },
  registerEvents,
  taskName,
}) {
  const columnWidth = layoutProps.keyWidth + layoutProps.valueWidth + layoutProps.columnGap / 2;
  const attributes = entityDetails;
  const attributeCount = attributes.length;

  const ref = useRef(null);
  const [width, setWidth] = useState(columnWidth);
  const [columnCount, setColumnCount] = useState(1);
  const [rowCount, setRowCount] = useState(attributeCount || 1);
  const classes = useStyles({ ...layoutProps, columnCount, rowCount });

  useEffect(() => {
    // TODO @cafe if resizing becomes a performance issue, we could debounce here
    const handleResize = () => {
      const widthAvailableForContent = ref.current.offsetWidth - layoutProps.containerPadding;
      setWidth(ref.current ? widthAvailableForContent : columnWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref.current]);

  useEffect(() => {
    const columns = Math.floor(width / columnWidth) || 1;
    const rows = Math.ceil(attributeCount / columns) || attributeCount;

    setColumnCount(columns);
    setRowCount(rows);
  }, [attributeCount, width]);

  return (
    <div className={classNames('ks-summary-panel', classes.summaryPanel)} ref={ref}>
      {/* TODO @cafe create a ticket to work on the title */}
      <div className={classNames('ks-summary-panel__content', classes.content)}>
        {attributes.map((attribute) => {
          const { elements, id } = attribute;
          const { inputComponent } = elements;
          const useDisplayComponent = !isEditing || isNilOrEmpty(inputComponent);
          const label = attribute.attributes[0].label;

          return (
            <div key={id} className={classNames('ks-summary-key-value', classes.summaryKeyValue)}>
              <MuiTooltip title={label} placement="top">
                <span className={classNames('ks-summary-key-value__key', classes.key)}>{label}</span>
              </MuiTooltip>
              <div className={classNames('ks-summary-key-value__value', classes.value)}>
                {useDisplayComponent ? (
                  <DisplayElement
                    attributes={attribute.attributes}
                    elements={attribute.elements}
                    params={attribute.params}
                    taskName={taskName}
                    widgetId={attribute.id}
                  />
                ) : (
                  <InputElement
                    attributes={attribute.attributes}
                    elements={attribute.elements}
                    registerEvents={registerEvents}
                    params={attribute.params}
                    taskName={taskName}
                    widgetId={attribute.id}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
