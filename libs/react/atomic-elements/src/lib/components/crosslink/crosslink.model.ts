import { Attribute, Cell } from '@kleeen/types';

import { ReactNode } from 'react';

export interface CrosslinkProps {
  attribute: Attribute;
  children: ReactNode;
  value: Cell;
}
