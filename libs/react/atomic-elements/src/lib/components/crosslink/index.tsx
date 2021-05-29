import { ContextMenu, isLinkFilterableByEntityType } from '@kleeen/react/components';
import { MouseEvent, ReactElement } from 'react';
import { isNilOrEmpty, isTransformationARecord } from '@kleeen/common/utils';
import { useAnchorElement, useCrosslinking } from '@kleeen/react/hooks';

import { CrosslinkProps } from './crosslink.model';
import classNames from 'classnames';
import { useStyles } from './crosslink.styles';

export function Crosslink({ attribute, children, value }: CrosslinkProps): ReactElement {
  const classes = useStyles();
  const { anchorEl, handleClick, handleClose } = useAnchorElement();
  const { crosslink } = useCrosslinking();
  const hasCrosslinking =
    Array.isArray(attribute?.crossLinking) &&
    !isNilOrEmpty(attribute.crossLinking) &&
    isTransformationARecord(attribute.transformation);
  const validCrosslinks =
    (hasCrosslinking &&
      attribute.crossLinking.filter((link) =>
        isLinkFilterableByEntityType(value?.$metadata?.entityType, link),
      )) ||
    [];

  function onClick(e: MouseEvent<HTMLDivElement>): void {
    if (validCrosslinks.length === 1) {
      const [onlyValidLink] = validCrosslinks;
      crosslink(onlyValidLink.slug, value, attribute);
    } else {
      handleClick(e);
    }
  }

  return (
    <>
      <div
        className={classNames('ks-crosslink', classes.crosslink, { [classes.hasCrosslink]: hasCrosslinking })}
        onClick={onClick}
      >
        {children}
      </div>
      {hasCrosslinking && Boolean(anchorEl) && (
        <ContextMenu attr={attribute} cell={value} handleClose={handleClose} anchorEl={anchorEl} />
      )}
    </>
  );
}
