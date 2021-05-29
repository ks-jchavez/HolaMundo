import { ClickableChipsCell, ListingModal } from '@kleeen/react/components';

import { DisplayComponentProps } from '@kleeen/types';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useState } from 'react';

export function Chips({ attribute, format, value }: DisplayComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (isNilOrEmpty(value)) {
    return <>{'No values'}</>; // TODO: @cafe add i18n key for this
  }

  return (
    <>
      <ClickableChipsCell
        attribute={attribute}
        cellItems={value || []}
        columnLabel={attribute.label}
        format={format}
        openShowMoreModal={() => setIsOpen(true)}
        isIdTemporary={false}
      />
      {isOpen && (
        <ListingModal
          attribute={attribute}
          columnLabel={attribute.label}
          data={value}
          format={format}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
