import { Translate } from '@kleeen/types';
import { Binding, PropertyDescription } from 'react-query-filter';

export enum FilterSectionOption {
  Combinator = 'combinator',
  Field = 'field',
  Operation = 'operation',
}

export enum FilterOptionTypes {
  Label = 'label',
  Is = 'is',
  Value = 'value',
}
export interface FilterRuleValueType {
  displayValue: string | number | boolean;
  id?: string;
}

export interface FilterQuery {
  combinator: Binding;
  rules: {
    field: FilterRuleValueType;
    operation: FilterRuleValueType;
    value: FilterRuleValueType;
  }[];
}

export interface Props {
  filterQuery?: FilterQuery;
  onApply?: (filterQuery: FilterQuery) => void;
  onChange?: (filterQuery: FilterQuery) => void;
  properties: PropertyDescription[];
  translate: Translate;
}
