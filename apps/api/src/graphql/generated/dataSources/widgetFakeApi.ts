/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import { DataListingArgs } from '../../../types';
import { DataSource } from 'apollo-datasource';
import { getListingData } from '../../../realisticFakeData';

export class WidgetFakeApi extends DataSource {
  async object_listing_8fd21fe9_e328_463c_b5cb_6a1b1feb0f83(args: DataListingArgs) {
    return getListingData(args);
  }
}
