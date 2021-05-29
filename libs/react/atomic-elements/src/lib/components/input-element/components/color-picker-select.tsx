import { ColorPicker } from '@kleeen/react/components';
import { InputComponentProps } from '@kleeen/types';

export function ColorPickerSelect({ setValue, value }: InputComponentProps) {
  return <ColorPicker defaultValue={value} handleOnChange={setValue} />;
}
