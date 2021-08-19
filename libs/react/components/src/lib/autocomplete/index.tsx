import { Autocomplete, Paper } from './autocomplete.styles';

import { KsAutocompleteProps } from './autocomplete.model';
import { KsTextField } from '../text-field';
import { ReactElement } from 'react';
import { useTheme } from '@kleeen/react/hooks';

export function KsAutocomplete({
  textFieldProps,
  renderInput = (params) => <KsTextField variant="outlined" {...params} {...textFieldProps} />,
  ...restProps
}: KsAutocompleteProps): ReactElement {
  const { themeClass } = useTheme();

  return (
    <Autocomplete
      renderInput={renderInput}
      renderOption={(option: { displayName?: string; name: string }) => {
        return <>{option.displayName || option.name}</>;
      }}
      PaperComponent={({ children }) => <Paper className={`${themeClass}`}>{children}</Paper>}
      {...restProps}
    />
  );
}
