/** FilterSelection.tsx */

import { Binding, Filter, OperationType, useQueryFilters } from 'react-query-filter';
import { FilterOptionTypes, FilterQuery, FilterRuleValueType, Props } from './query-builder.models';
import React, { FC, useEffect, useState } from 'react';
import { convertArrayToObject, getQueryFiltersParams } from './query-builder.utils';

import FilterRow from './filter-row';
import { KUIConnect } from '@kleeen/core-react';
import { KsButton } from '..';
import capitalize from 'lodash.capitalize';
import classnames from 'classnames';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './filter-query-builder.style';

const bem = 'ks-filter-selection';

const FilterSelection: FC<Props> = ({ filterQuery, onApply, onChange, properties, translate }) => {
  const useQueryFiltersParams = getQueryFiltersParams(properties, filterQuery);
  const { filters, onAddFilter, createFilterRowProps } = useQueryFilters(useQueryFiltersParams);
  const classes = useStyles();

  const suggestionsObj = convertArrayToObject(
    properties.map((prop) => ({ key: prop.key, suggestions: convertArrayToObject(prop?.suggestions) })),
    'key',
  );

  const onApplyFilter = () => {
    if (onApply) onApply(getQuery({ filters, suggestionsObj }));
  };

  const combinatorDefault = { value: Binding.AND, label: capitalize(Binding.AND) };

  const [combinator, setCombinator] = useState(() =>
    filterQuery?.combinator
      ? { value: Binding[filterQuery.combinator], label: capitalize(Binding[filterQuery.combinator]) }
      : combinatorDefault,
  );

  useEffect(() => {
    if (filters?.length === 0) setCombinator(combinatorDefault);
    if (onChange) onChange(getQuery({ filters, suggestionsObj }));
  }, [filters]);

  return (
    <div className={classnames(bem, classes.filterSelectionContainer)}>
      {filters.map((filter, index) => (
        <FilterRow
          combinator={combinator}
          disabled={index > 1}
          key={filter.id}
          properties={properties}
          setCombinator={setCombinator}
          suggestionsObj={suggestionsObj}
          translate={translate}
          {...createFilterRowProps(index)}
        />
      ))}
      {filters.length === 0 && (
        <div className={classnames(`${bem}__no-filters`, classes.noFilters)}>
          {translate('app.filterSelection.filter.noApplied')}
        </div>
      )}

      <div className={classnames(`${bem}__actions`, classes.actions)}>
        <KsButton className={classnames(`${bem}__actionButton`, classes.actionButton)} onClick={onAddFilter}>
          {translate('app.filterSelection.filter.add')}
        </KsButton>
        <KsButton
          className={classnames(`${bem}__actionButton`, classes.actionButton)}
          onClick={onApplyFilter}
        >
          {translate('app.filterSelection.filter.apply')}
        </KsButton>
      </div>
    </div>
  );
};

export const FilterSectionComponent = KUIConnect(({ translate }) => ({ translate }))(FilterSelection);

export default KUIConnect(({ translate }) => ({ translate }))(FilterSectionComponent);

//#region private methods

function getQuery({ filters, suggestionsObj }: { filters: Filter[]; suggestionsObj }): FilterQuery {
  const getValueFromFilter = (filter: Filter): FilterRuleValueType => {
    if (isNilOrEmpty(filter)) {
      return null;
    } else {
      const filterValue = filter?.value as string | number;
      return suggestionsObj?.[filter.field?.[FilterOptionTypes.Value]]?.suggestions?.[filterValue];
    }
  };

  const getOperation = (filterOperation: string): { id: string; displayValue: string } => {
    const defaultOperation = { id: OperationType.IS, displayValue: FilterOptionTypes.Is };
    if (isNilOrEmpty(filterOperation)) return defaultOperation;
    else {
      return {
        id: filterOperation?.[FilterOptionTypes.Value],
        displayValue: filterOperation?.[FilterOptionTypes.Label],
      };
    }
  };

  const rules =
    filters.map((filter) => {
      return {
        field: {
          id: filter.field?.[FilterOptionTypes.Value],
          displayValue: filter.field?.[FilterOptionTypes.Label],
        },
        value: getValueFromFilter(filter),
        operation: getOperation(filter.operation),
      };
    }) || [];
  const query = {
    rules,
    combinator: filters[1]?.binding,
  };
  return query;
}

//#endregion
