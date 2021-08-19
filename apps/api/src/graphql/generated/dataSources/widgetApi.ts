/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs, AuthContext } from '../../../types';
import { object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d } from '../../custom/widgetResolvers/object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d';
import { widget_3ca6a981_d631_400f_a028_36513cc627ec } from '../../custom/widgetResolvers/widget_3ca6a981_d631_400f_a028_36513cc627ec';
import { widget_d1787228_f48f_4aae_80d0_e03bd672311a } from '../../custom/widgetResolvers/widget_d1787228_f48f_4aae_80d0_e03bd672311a';
import { widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c } from '../../custom/widgetResolvers/widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c';
import { widget_statistics17d19cab_0218_41cd_9677_3248728885a0 } from '../../custom/widgetResolvers/widget_statistics17d19cab_0218_41cd_9677_3248728885a0';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(args: DataListingArgs) {
    return object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(args, this.context);
  }

  async widget_3ca6a981_d631_400f_a028_36513cc627ec(args: DataAggregationArgs) {
    return widget_3ca6a981_d631_400f_a028_36513cc627ec(args, this.context);
  }

  async widget_d1787228_f48f_4aae_80d0_e03bd672311a(args: DataAggregationArgs) {
    return widget_d1787228_f48f_4aae_80d0_e03bd672311a(args, this.context);
  }

  async widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(args: DataAggregationArgs) {
    return widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(args, this.context);
  }

  async widget_statistics17d19cab_0218_41cd_9677_3248728885a0(args: MultiTransFormationArgs) {
    return widget_statistics17d19cab_0218_41cd_9677_3248728885a0(args, this.context);
  }
}
