import { Attribute, FormatProps, ListItem } from '../types';
import { Dispatch, SetStateAction } from 'react';
import { ElementDisplayType, ElementInputType } from '../enums/elements';

import { AggregationType } from '../enums';

//#region BaseComponentProps
interface BaseComponentProps {
  format?: FormatProps;
  formatType?: string;
  transformation?: AggregationType;
  value?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type BaseDisplayComponentsProps = BaseComponentProps;

export interface BaseInputComponentProps extends BaseComponentProps {
  setSelectedOption: Dispatch<SetStateAction<ListItem | ListItem[]>>;
  setValue: Dispatch<SetStateAction<any>>;
}
//#endregion

//#region DisplayComponentProps
export interface DisplayComponentProps extends BaseDisplayComponentsProps {
  attribute: Attribute;
  element: ElementDisplayType;
}

export type DisplayElement = (props: DisplayComponentProps) => JSX.Element;

export type DisplayCatalog = { [key in ElementDisplayType]: DisplayElement };
//#endregion

//#region InputComponentProps
export interface ElementComponentRules {
  component: ElementInputType;
  maxChoices?: number;
}

export interface ElementComponents {
  displayComponent: ElementDisplayType;
  inputComponent?: ElementInputType;
  rules?: ElementComponentRules[];
}

export interface InputComponentProps extends BaseInputComponentProps {
  attribute: Attribute;
  autoCompleteValues: ListItem[];
  element: ElementInputType;
  getInputElement: (inputComponent: string) => InputElement;
  rules: ElementComponentRules[];
}

export type InputElement = (props: InputComponentProps) => JSX.Element;

export type InputCatalog = { [key in ElementInputType]: InputElement };
//#endregion
