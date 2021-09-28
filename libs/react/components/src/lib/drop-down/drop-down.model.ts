import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { Translate } from '@kleeen/types';

export interface ItemType<T = any> {
  handleOnClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: ItemType) => void;
  icon?: string;
  key: string;
  label: string | JSX.Element;
  option?: T;
  path?: string;
}

export interface KsMenuProps {
  accessKey?: string;
  anchorEl: null | HTMLElement;
  className?: string;
  handleClose: (e: React.MouseEvent<Document, MouseEvent>) => void;
  handleOnClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: ItemType) => void;
  open: boolean;
  options: ItemType[];
  selectedItem?: ItemType;
  shouldHighlightSelected?: boolean;
  syncWidth?: boolean;
}

export interface InputElementProps {
  currentItem: ItemType;
  options: ItemType[];
  setOpen: (open: boolean) => void;
  translate: Translate;
}

export interface KsDropDownProps {
  accessKey?: string;
  dataTestId?: string;
  defaultDropdownClass?: string;
  handleOnClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: ItemType) => void;
  InputElement?: ForwardRefExoticComponent<InputElementProps & RefAttributes<HTMLElement>>;
  options: ItemType[];
  hideIcon?: boolean;
  selectedItem?: ItemType;
  shouldHighlightSelected?: boolean;
  syncWidth?: boolean;
  translate?: Translate;
}
