import { CardTitleProps } from '../../CardWidget.model';
import { ReactElement } from '@kleeen/types';

export interface SectionType {
  flexNumber?: number;
  sections: SectionComponentType[];
}

export interface WidgetHeaderProps extends CardTitleProps {
  centerSection?: SectionType;
  endSection?: SectionType;
}

export interface SectionComponentType {
  component: ReactElement;
  endSeparator?: boolean;
  flexNumber?: number;
}
