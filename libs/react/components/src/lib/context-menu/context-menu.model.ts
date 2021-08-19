import {
  Attribute,
  ContextMenuDataPoint,
  DataPointWithFormattedValue,
  Filters,
  ReactElement,
} from '@kleeen/types';

import { MouseEventHandler } from 'react';

export interface ContextMenuViz {
  attributes: Attribute[];
}

export interface ContextMenuProps {
  anchorEl: null | HTMLElement;
  autoClose?: boolean;
  dataPoints: ContextMenuDataPoint[];
  handleClose: () => void;
}

export type FormattedContextDataPoint = DataPointWithFormattedValue & ContextMenuDataPoint;

export interface DataPointWithFilters extends DataPointWithFormattedValue {
  filters?: Filters;
}

export enum MenuItemType {
  Section = 'section',
  Empty = 'empty',
}

export interface ContextMenuItem {
  handleClick: (item: ContextMenuItem) => MouseEventHandler;
  key: string;
  label: ReactElement;
  roleAccessKey: string;
}

export interface ContextMenuSectionItem {
  key: string;
  label: ReactElement;
  menuItems: ContextMenuItem[];
}
