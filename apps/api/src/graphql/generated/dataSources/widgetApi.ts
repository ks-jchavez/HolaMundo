/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import { DataListingArgs, AuthContext } from '../../../types';
import { object_listing_8fd21fe9_e328_463c_b5cb_6a1b1feb0f83 } from '../../custom/widgetResolvers/object_listing_8fd21fe9_e328_463c_b5cb_6a1b1feb0f83';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async object_listing_8fd21fe9_e328_463c_b5cb_6a1b1feb0f83(args: DataListingArgs) {
    return object_listing_8fd21fe9_e328_463c_b5cb_6a1b1feb0f83(args, this.context);
  }
}
