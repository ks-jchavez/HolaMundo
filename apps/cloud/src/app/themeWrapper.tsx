import { app, fontFamily, theme } from '@kleeen/settings';
import { useGetThemeStoredValue, useTheme } from '@kleeen/react/hooks';

import classnames from 'classnames';
import { isReactNativeInfusion } from '@kleeen/common/utils';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';

// Add global font class
const useStyles = makeStyles({
  '@global': {
    '.ks-global-font': {
      fontFamily,
    },
  },
  appContainer: {
    background: 'var(--application-background)',
  },
});

function ThemeWrapper({ children }) {
  const bem = 'ks';
  const { position } = app.layout;
  const navClass = isReactNativeInfusion() ? 'no-nav' : position;
  const classes = useStyles();
  const { setTheme, themeClass } = useTheme();
  const { storedTheme } = useGetThemeStoredValue(theme);

  useEffect(() => {
    setTheme(storedTheme);
  }, [storedTheme.kit]);

  return (
    <div
      className={classnames(
        'generated-new',
        'ks-global-font',
        bem,
        classes.appContainer,
        navClass,
        themeClass,
      )}
      data-testid="app-container"
      id={'theme-wrapper-id'}
    >
      {children}
    </div>
  );
}

export default ThemeWrapper;
