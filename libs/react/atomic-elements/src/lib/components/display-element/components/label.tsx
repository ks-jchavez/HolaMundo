import { Crosslink } from '../../crosslink';
import { DisplayComponentProps } from '@kleeen/types';
import { KsDisplayMedia } from '@kleeen/react/components';
import MuiTooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import { getColorForSeverityValues } from '@kleeen/frontend/utils';
import { useStyles } from './label.styles';
import { useTextFormatter } from '@kleeen/react/hooks';

export function Label({ attribute, format, formatType, transformation, value }: DisplayComponentProps) {
  const color = getColorForSeverityValues(value?.displayValue, format, transformation);
  const classes = useStyles();
  const [formatter] = useTextFormatter({
    format,
    formatType,
    transformation,
  });

  const formattedValue = formatter(value?.displayValue) || '';

  return (
    <div className={classNames('ks-label', classes.label)}>
      {value?.displayMedia && (
        <KsDisplayMedia
          className={classNames('ks-label__display-media', classes.displayMedia)}
          size={16}
          type={value?.displayMedia.type}
          value={value?.displayMedia.value}
        />
      )}
      <Crosslink attribute={attribute} value={value}>
        <MuiTooltip enterDelay={500} enterNextDelay={500} title={formattedValue} placement="top-start">
          <div className={classNames('ks-label__text', classes.text)} style={{ color }}>
            {formattedValue}
          </div>
        </MuiTooltip>
      </Crosslink>
    </div>
  );
}
