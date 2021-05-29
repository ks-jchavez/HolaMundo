/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import { DataListingArgs, DataAggregationArgs, AuthContext } from '../../../types';
import { object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d } from '../../custom/widgetResolvers/object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d';
import { summary_title_9d3cc67d_7be7_421b_a6a4_3a9afe9ea187 } from '../../custom/widgetResolvers/summary_title_9d3cc67d_7be7_421b_a6a4_3a9afe9ea187';
import { summary_title_ceb0070d_193e_4c86_a2b2_25b20c3f61bf } from '../../custom/widgetResolvers/summary_title_ceb0070d_193e_4c86_a2b2_25b20c3f61bf';
import { widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c } from '../../custom/widgetResolvers/widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(args: DataListingArgs) {
    return object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(args, this.context);
  }

  async summary_title_9d3cc67d_7be7_421b_a6a4_3a9afe9ea187(args: DataListingArgs) {
    return summary_title_9d3cc67d_7be7_421b_a6a4_3a9afe9ea187(args, this.context);
  }

  async summary_title_ceb0070d_193e_4c86_a2b2_25b20c3f61bf(args: DataListingArgs) {
    return summary_title_ceb0070d_193e_4c86_a2b2_25b20c3f61bf(args, this.context);
  }

  async widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(args: DataAggregationArgs) {
    return widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(args, this.context);
  }
}
