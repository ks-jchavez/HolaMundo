import { ReactElement, useState } from 'react';
import {
  useAnchorElement,
  useCrosslinking,
  useHoverIntent,
  validateCrosslinkingInteraction,
} from '@kleeen/react/hooks';

import { CrosslinkProps } from './crosslink.model';
import { KsContextMenu } from '@kleeen/react/components';
import classNames from 'classnames';
import { useIsAttributeClickable } from '../context-cell/hooks';
import { useStyles } from './crosslink.styles';

const bem = 'ks-crosslink';

export function KsCrosslink({ children, dataPoints, transformationKeyToUse }: CrosslinkProps): ReactElement {
  const [dataPoint] = dataPoints;
  const { anchorEl, handleClick, handleClose } = useAnchorElement();
  const { crosslink } = useCrosslinking();
  const { ref } = useHoverIntent<HTMLDivElement>({
    delayOnEnter: 800,
    onMouseEnterFn: handleClick,
  });
  const isContentClickable = useIsAttributeClickable({
    attribute: dataPoint?.attribute,
    cellEntityType: dataPoint?.value?.$metadata?.entityType,
    isIdTemporary: false,
    transformationKeyToUse,
  });
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  function handleCloseHelper() {
    setOpenModal(false);
    handleClose();
  }

  function onCellClick() {
    const { attribute, value } = dataPoint;

    if (isContentClickable) {
      const [firstValidCrossLink] = attribute?.crossLinking;
      crosslink(firstValidCrossLink.slug, value, attribute);
    }
  }

  const { onClickFunction, onContextMenuFunction, validation } = validateCrosslinkingInteraction(
    anchorEl,
    onCellClick,
    openModal,
    setOpenModal,
  );

  return (
    <>
      <div
        className={classNames(bem, classes.content, { [classes.isContentClickable]: isContentClickable })}
        onClick={onClickFunction}
        onContextMenu={onContextMenuFunction}
        ref={ref}
      >
        {children}
      </div>
      {validation && (
        <KsContextMenu
          anchorEl={anchorEl}
          autoClose
          dataPoints={dataPoints}
          handleClose={handleCloseHelper}
        />
      )}
    </>
  );
}
