import { AggregationType, StatisticalDataType, ViewType } from '../enums';
import { Attribute, AttributeProps } from './attributes';

import { Action } from './actions';
import { CustomWidget } from './custom-widget';
import { Filters } from './filters';
import { Maybe } from './base';
import { WidgetTypes } from '../enums/widgets';

export interface Widget extends VizCommonParams {
  actions: Action[];
  attributes: Attribute[];
  chartType: WidgetTypes;
  component?: Maybe<CustomWidget>;
  entityId?: string;
  id: string | number;
  sortOrder?: number;
  statisticalType?: StatisticalDataType;
  title?: string;
  type?: ViewType;
  viableSolutions?: WidgetTypes[];
  viewId?: string;
}

export interface GroupByProps {
  name: string;
  transformation: string;
  formatType: string;
}

export interface MenuListProps {
  func?: () => void;
  icon?: string;
  path: string;
  title: string;
}

export interface TransformationProps {
  isPrimary?: boolean;
  transformation: AggregationType;
  transformationMetadata?: TransformationMetadataProps;
  metadata?: TransformationMetadataProps;
}

export interface TransformationMetadataProps {
  changeDirections: string;
}

export interface ValueProp {
  name: string;
  transformation: string;
  formatType: string;
}

export interface ValuesProps {
  label: string;
  name: string;
  transformations: TransformationProps[];
  formatType: string;
}

export interface VizParams {
  baseModel: string;
  cardinality?: string;
  displayName?: string;
  filters?: Filters;
  groupBy?: GroupByProps;
  operationName?: string;
  taskName?: string;
  value?: ValueProp | ValuesProps;
}

export interface VizCommonParams {
  params: VizParams;
}
