import { v4 as uuid } from 'uuid';
import { FilterQuery } from './query-builder.models';
import { FilterForNumerics } from '@kleeen/types';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { Filter, PropertyDescription } from 'react-query-filter';

export const outputToInput = (filterQuery: FilterQuery): Filter[] => {
  const { rules } = filterQuery;
  return rules.map((rule, index) => ({
    binding: index && filterQuery.combinator,
    field: { value: rule.field?.id, label: rule.field?.displayValue },
    id: rule.value?.id || uuid(),
    operation: { value: rule.operation?.id, label: rule.operation?.displayValue },
    value: rule.value?.id ?? rule.value?.displayValue,
  })) as any;
};

export const convertArrayToObject = (array = [], key = 'id') => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

export const getOperators = (type: string) => {
  const numericalOperations = [
    {
      label: 'is',
      value: 'IS',
    },
    {
      label: 'min',
      value: 'BIGGER_OR_EQUAL_THAN',
    },
    {
      label: 'max',
      value: 'LOWER_OR_EQUAL_THAN',
    },
  ];

  const defaultOperation = [
    {
      label: 'is',
      value: 'IS',
    },
  ];
  return FilterForNumerics.includes(type) ? numericalOperations : defaultOperation;
};

export function getQueryFiltersParams(properties: PropertyDescription[], filterQuery: FilterQuery) {
  return isNilOrEmpty(filterQuery)
    ? {
        properties,
      }
    : {
        properties,
        initialValue: outputToInput(filterQuery),
      };
}
