/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import { DataListingArgs, DataAggregationArgs } from '../../../types';
import { DataSource } from 'apollo-datasource';
import { getListingData, getWidgetData } from '../../../realisticFakeData';

export class WidgetFakeApi extends DataSource {
  async object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(args: DataListingArgs) {
    return getListingData(args);
  }

  async summary_title_9d3cc67d_7be7_421b_a6a4_3a9afe9ea187(args: DataListingArgs) {
    return getListingData(args);
  }

  async summary_title_ceb0070d_193e_4c86_a2b2_25b20c3f61bf(args: DataListingArgs) {
    return getListingData(args);
  }

  async widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(args: DataAggregationArgs) {
    return getWidgetData(args);
  }
}
