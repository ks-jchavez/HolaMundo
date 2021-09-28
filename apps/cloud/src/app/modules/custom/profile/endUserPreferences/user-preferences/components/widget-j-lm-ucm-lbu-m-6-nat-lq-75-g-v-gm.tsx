import { CustomWidgetProps, TranslateProps } from '@kleeen/types';
import { Language, useLocalization } from '@kleeen/react/hooks';
import { find, propEq } from 'ramda';
import { useEffect, useRef, useState } from 'react';

import { CardWidget02 } from '@kleeen/react/atomic-elements';
import { KUIConnect } from '@kleeen/core-react';
import { KsRadioGroupForm } from '@kleeen/react/components';

export const LANGUAGE_ENTITY_KEY = 'Language';

const options = [
  {
    id: Language.en,
    value: 'English',
  },
  {
    id: Language.es,
    value: 'Español',
  },
];

function LanguageInputWidgetBase({ translate, ...widget }: CustomWidgetProps & TranslateProps) {
  const { language } = useLocalization();
  const [defaultOption] = options;
  const defaultLanguage = find(propEq('id', language), options) || defaultOption;

  const localLanguageRef = useRef(defaultLanguage.value);
  const [localLanguage, setLocalLanguage] = useState(localLanguageRef.current);

  useEffect(() => {
    widget.registerEvents?.({ onSave, onCancel });
  }, []);

  useEffect(() => {
    localLanguageRef.current = localLanguage;
  }, [localLanguage]);

  function onSave() {
    const foundLanguageOption = find(propEq('value', localLanguageRef.current), options) || defaultOption;
    return {
      entity: LANGUAGE_ENTITY_KEY,
      params: foundLanguageOption.id,
    };
  }

  function onCancel() {
    setLocalLanguage(defaultLanguage.value);
  }

  function onInputChange(_, selectedValue: string): void {
    setLocalLanguage(selectedValue);
    widget.onInputChange?.(true);
  }

  return (
    <CardWidget02 {...widget} icon={false} title={translate('entities.endUserPreferences.locale')}>
      <KsRadioGroupForm onChange={onInputChange} options={options} value={localLanguage} />
    </CardWidget02>
  );
}

export const LanguageInputWidget = KUIConnect(({ translate }) => ({ translate }))(LanguageInputWidgetBase);
export default LanguageInputWidget;
