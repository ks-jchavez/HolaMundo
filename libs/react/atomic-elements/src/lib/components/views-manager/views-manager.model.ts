import { ViewShapeType } from '@kleeen/types';
import { FC } from 'react';

export interface KsViewsManagerProps<T> {
  SubHeader: FC<T>;
  subHeaderProps: T;
  views: ViewShapeType[];
  taskName: string;
  containerClasses: string;
  pageIntroClasses: string;
  contentClasses: string;
  entityActions: Record<string, Function>;
}
