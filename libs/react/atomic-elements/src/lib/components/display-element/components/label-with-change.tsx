import { Arrow } from '../../Arrow/Arrow';
import { DisplayComponentProps } from '@kleeen/types';
import classNames from 'classnames';
import { useStyles } from './label.styles';

export function LabelWithChange({ attribute, transformation, value }: DisplayComponentProps) {
  const classes = useStyles();

  return (
    <div className={classNames('ks-label', classes.label)}>
      <Arrow
        transformation={{
          transformation,
          metadata: attribute.aggregationMetadata,
        }}
        value={value?.displayValue}
      />
    </div>
  );
}
