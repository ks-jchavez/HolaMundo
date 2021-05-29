import { TranslateProps } from '../../../../../types';
import { ViewOption } from '../../../DataViewControlSection/DataViewControlSection.model';
export interface ButtonSelectProps extends TranslateProps {
  viewOptions: ViewOption[];
  handleChangeTab: (e) => void;
  value: string;
  taskName?: string;
}
