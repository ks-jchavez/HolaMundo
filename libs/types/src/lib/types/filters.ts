import { AccessControlPermission } from '../enums';

export type Filters = Record<string, any>;

export interface WorkflowFilter {
  name: string;
  statisticalType: string;
  accessLevel: AccessControlPermission;
}
