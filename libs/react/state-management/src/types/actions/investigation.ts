import { LibraryWidget } from '@kleeen/widgets';
import { PayloadAction } from '@reduxjs/toolkit';

export type AddWidget = {
  type: string;
} & PayloadAction<LibraryWidget>;

export type InitializeWidgets = {
  type: string;
} & PayloadAction<LibraryWidget[]>;
