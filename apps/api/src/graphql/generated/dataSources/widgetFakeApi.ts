/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs } from '../../../types';
import { DataSource } from 'apollo-datasource';
import { getListingData, getWidgetData, getMultiTransFormationData } from '../../../realisticFakeData';

export class WidgetFakeApi extends DataSource {
  async object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(args: DataListingArgs) {
    return getListingData(args);
  }

  async widget_3ca6a981_d631_400f_a028_36513cc627ec(args: DataAggregationArgs) {
    return getWidgetData(args);
  }

  async widget_d1787228_f48f_4aae_80d0_e03bd672311a(args: DataAggregationArgs) {
    return getWidgetData(args);
  }

  async widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(args: DataAggregationArgs) {
    return getWidgetData(args);
  }

  async widget_statistics17d19cab_0218_41cd_9677_3248728885a0(args: MultiTransFormationArgs) {
    return getMultiTransFormationData(args);
  }
}
