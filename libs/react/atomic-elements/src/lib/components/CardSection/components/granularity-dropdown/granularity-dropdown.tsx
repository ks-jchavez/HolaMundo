import { ItemType, KsButtonText, KsDropDown, KsSvgIcon } from '@kleeen/react/components';
import { MutableRefObject, Ref, forwardRef, useState } from 'react';
import { ReactElement, TemporalBucket, TemporalInterval, granularityOptions } from '@kleeen/types';

import { Translate } from '@kleeen/core-react';
import noop from 'lodash.noop';
import { useStyles } from './granularity-dropdown.styles';

interface GranularityDropdownProps {
  onSelectGranularity: (selected: TemporalBucket) => void;
}

function GranularityDropdown({ onSelectGranularity = noop }: GranularityDropdownProps) {
  const classes = useStyles();
  const [selectedGranularity, setSelectedGranularity] = useState<TemporalBucket>(null);
  const GranularityButton = forwardRef(
    (
      { setOpen }: { currentItem: ItemType; setOpen: (open: boolean) => void },
      ref: MutableRefObject<HTMLElement>,
    ) => {
      return (
        <KsButtonText ref={ref as Ref<HTMLButtonElement>} onClick={() => setOpen(true)}>
          <div className={classes.granularityIconContainer}>
            <div className={classes.selectedGranularityText}>
              {selectedGranularity?.magnitude}
              <Translate
                id={`app.granularity.short.${
                  selectedGranularity?.interval ? selectedGranularity?.interval : 'rawData'
                }`}
              />
            </div>
            <div className={classes.granularityIcon}>
              <KsSvgIcon icon="ks-granularity" size="extra-large" />
            </div>
          </div>
        </KsButtonText>
      );
    },
  );

  function getGranularityLabel({ interval, magnitude }: TemporalBucket): ReactElement {
    const isMagnitudeGreaterThanOne = magnitude > 1;
    return (
      <span>
        {isMagnitudeGreaterThanOne ? magnitude + ' ' : ''}
        <Translate id={`app.granularity.${interval}`} />
        {isMagnitudeGreaterThanOne ? 's' : ''}
      </span>
    );
  }

  function optionsParser(defaultOptions: TemporalBucket[]): ItemType<TemporalBucket>[] {
    return defaultOptions.map((option) => ({
      label: getGranularityLabel(option),
      key: `${option.magnitude}${option.interval}`,
      handleOnClick: () => {
        setSelectedGranularity(option);
        onSelectGranularity(option);
      },
    }));
  }

  const granularityOptionsTreated: ItemType<TemporalBucket>[] = [
    {
      label: <Translate id="app.granularity.rawData" />,
      key: 'raw-data',
      handleOnClick: () => {
        setSelectedGranularity(undefined);
        onSelectGranularity(undefined);
      },
    },
    ...optionsParser(granularityOptions),
  ];

  return <KsDropDown InputElement={GranularityButton} options={granularityOptionsTreated} />;
}

export default GranularityDropdown;
