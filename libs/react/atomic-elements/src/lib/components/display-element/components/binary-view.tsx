import { DisplayComponentProps } from '@kleeen/types';

export function BinaryView({ value }: DisplayComponentProps) {
  const displayValue = value?.displayValue ? 'True' : 'False';

  return (
    <>
      <span>{displayValue}</span>
    </>
  );
}
