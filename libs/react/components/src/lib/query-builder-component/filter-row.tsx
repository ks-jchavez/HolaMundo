/** FilterRow.tsx */

import { Variant } from '@kleeen/types';
import { IconButton, Tooltip } from '@material-ui/core';
import { KsAutocomplete, KsMenuItem, KsTextField } from '..';

import { Clear } from '@material-ui/icons';
import { FilterSectionOption } from './query-builder.models';
import { KUIConnect } from '@kleeen/core-react';
import classnames from 'classnames';
import { useStyles } from './filter-query-builder.style';
import { getOperators } from './query-builder.utils';
import { BaseSyntheticEvent } from 'react';

const bem = 'ks-filter-selection-row';

const FilterRow = ({
  bindings,
  combinator,
  disabled,
  filter,
  fields,
  onChangeValue,
  onRemove,
  operations,
  properties,
  selectStates,
  shouldRenderBindingSelect,
  shouldRenderValueInput,
  setCombinator,
  suggestionsObj,
  translate,
  ...restProps
}) => {
  const classes = useStyles();

  const { onChangeBinding, onChangeField, onChangeOperation } = selectStates;

  const onChangeBase = ({
    label,
    type,
    value,
  }: {
    label: string | BaseSyntheticEvent;
    type: string;
    value: string | number | boolean;
  }): void => {
    switch (type) {
      case FilterSectionOption.Combinator:
        setCombinator({ label, value });
        onChangeBinding({ label, value });
        break;

      case FilterSectionOption.Operation:
        onChangeOperation({ label, value });
        break;

      case FilterSectionOption.Field:
        onChangeField({ label, value });
        break;

      default:
        break;
    }
  };

  const selectedProperty = properties.find((property) => property.key === filter.field?.value);
  const suggestionObjByKey = suggestionsObj[filter.field?.value]?.suggestions;
  const suggestedValues = selectedProperty?.suggestions?.map((sugg) => ({
    label: sugg.displayValue,
    value: sugg.id,
  }));

  const operationsByType = getOperators(selectedProperty?.type);

  const filteredOperations = selectedProperty ? (operationsByType as any) : [];
  return (
    <div className={classnames(bem, classes.row)}>
      <Tooltip title={translate('app.filterSelection.filter.remove')} placement="left">
        <IconButton onClick={onRemove} className={classnames(`${bem}__removeButton`, classes.removeButton)}>
          <Clear style={{ fontSize: 17 }} />
        </IconButton>
      </Tooltip>
      {shouldRenderBindingSelect ? (
        <KsAutocomplete
          className={classnames(`${bem}__where-section`, classes.where)}
          disabled={disabled}
          disableClearable={true}
          onChange={(label, value) =>
            onChangeBase({ label: value.label, value: value.value, type: FilterSectionOption.Combinator })
          }
          options={bindings || []}
          getOptionLabel={({ label }) => (label ? String(label) : '')}
          getOptionSelected={(option, value) => option.value === value?.value}
          renderInput={(params) => (
            <KsTextField
              variant={Variant.standard}
              {...params}
              InputProps={{ ...params.InputProps }}
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
          renderOption={(binding) => (
            <KsMenuItem value={binding.value} key={binding.value} selected={filter.binding === binding.label}>
              {binding.label}
            </KsMenuItem>
          )}
          value={combinator}
          {...restProps}
        />
      ) : (
        <span className={classnames(`${bem}__where-text`, classes.where)}>
          {translate('app.filterSelection.section.where')}
        </span>
      )}
      <KsAutocomplete
        className={classnames(`${bem}__option-section`, classes.option)}
        disabled={false}
        getOptionLabel={({ label }) => (label ? String(label) : '')}
        getOptionSelected={(option, value) => option.value === value?.value}
        onChange={(label, value) => onChangeBase({ label, value, type: FilterSectionOption.Field })}
        options={fields || []}
        renderInput={(params) => (
          <KsTextField
            variant={Variant.standard}
            {...params}
            InputProps={{ ...params.InputProps }}
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
        renderOption={(field) => (
          <KsMenuItem
            value={field.value}
            key={field.value}
            selected={filter.field && filter.field.value === field.value}
          >
            {field.label}
          </KsMenuItem>
        )}
        value={filter.field ?? ''}
      />
      <KsAutocomplete
        className={classnames(`${bem}__comparator-section`, classes.option)}
        disabled={false}
        getOptionLabel={({ label }) => (label ? String(label) : '')}
        getOptionSelected={(option, value) => option.value === value?.value || option.id === value?.id}
        onChange={(label, value) => onChangeBase({ label, value, type: FilterSectionOption.Operation })}
        options={filteredOperations || []}
        renderInput={(params) => (
          <KsTextField
            variant={Variant.standard}
            {...params}
            InputProps={{ ...params.InputProps }}
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
        renderOption={(field) => (
          <KsMenuItem
            value={field.value}
            key={field.value}
            selected={filter.field && filter.field.value === field.value}
          >
            {field.label}
          </KsMenuItem>
        )}
        value={filter.operation ?? ''}
      />
      {shouldRenderValueInput && (
        <KsAutocomplete
          disabled={false}
          getOptionLabel={(option) =>
            suggestionObjByKey?.[option]?.displayValue ? String(suggestionObjByKey[option]?.displayValue) : ''
          }
          getOptionSelected={(option, value) => option.value == value || option.value === value?.value}
          onChange={(_, value) => {
            onChangeValue({ target: { value: value.value } });
          }}
          options={suggestedValues || []}
          renderInput={(params) => (
            <KsTextField
              variant={Variant.standard}
              {...params}
              InputProps={{ ...params.InputProps }}
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
          renderOption={(value) => (
            <KsMenuItem value={value.value} key={value.value} selected={filter.value === value.value}>
              {value.label}
            </KsMenuItem>
          )}
          value={filter.value ?? ''}
        />
      )}
    </div>
  );
};

export default KUIConnect(({ translate }) => ({ translate }))(FilterRow);
