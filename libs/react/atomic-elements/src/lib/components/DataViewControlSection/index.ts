import {
  DataViewControlSectionProps as DataViewControlSectionPropsType,
  ViewOption,
} from './DataViewControlSection.model';

import { isNilOrEmpty } from '@kleeen/common/utils';

export * from './DataViewControlSection';
export type DataViewControlSectionProps = DataViewControlSectionPropsType;

export function formatViewOptions(viewOptions: ViewOption[]) {
  return viewOptions.map(({ name, viewOrder }, index) => ({
    label: name,
    value: isNilOrEmpty(viewOrder) ? index : viewOrder,
  }));
}
