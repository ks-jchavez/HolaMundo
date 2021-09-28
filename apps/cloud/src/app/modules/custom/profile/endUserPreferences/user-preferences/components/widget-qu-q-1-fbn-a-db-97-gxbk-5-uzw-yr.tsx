import { CustomWidgetProps, TranslateProps } from '@kleeen/types';
import { ThemeKit, useTheme } from '@kleeen/react/hooks';
import { find, propEq } from 'ramda';
import { useEffect, useRef, useState } from 'react';

import { CardWidget02 } from '@kleeen/react/atomic-elements';
import { KUIConnect } from '@kleeen/core-react';
import { KsRadioGroupForm } from '@kleeen/react/components';

export const THEME_ENTITY_KEY = 'Theme';

const options = [
  {
    id: ThemeKit.Light,
    value: 'Light',
  },
  {
    id: ThemeKit.Dark,
    value: 'Dark',
  },
];

function ThemeInputWidgetBase({ translate, ...widget }: CustomWidgetProps & TranslateProps) {
  const { theme } = useTheme();
  const [defaultTheme] = options;
  const selectedTheme = find(propEq('id', theme.kit), options) || defaultTheme;

  const [localTheme, setLocalLanguage] = useState(selectedTheme.value);
  const localThemeRef = useRef(localTheme);

  useEffect(() => {
    widget.registerEvents?.({
      onSave,
      onCancel,
    });
  }, []);

  useEffect(() => {
    localThemeRef.current = localTheme;
  }, [localTheme]);

  function onSave() {
    const foundLanguageOption = find(propEq('value', localThemeRef.current), options) || defaultTheme;
    return {
      entity: THEME_ENTITY_KEY,
      params: {
        kit: foundLanguageOption.id,
      },
    };
  }

  function onCancel() {
    setLocalLanguage(selectedTheme.value);
  }

  function onInputChange(_, selectedValue: string): void {
    setLocalLanguage(selectedValue);
    widget.onInputChange?.(true);
  }

  return (
    <CardWidget02 {...widget} icon={false} title={translate('entities.endUserPreferences.theme')}>
      <KsRadioGroupForm onChange={onInputChange} options={options} value={localTheme} />
    </CardWidget02>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(ThemeInputWidgetBase);
