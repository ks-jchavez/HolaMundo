/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs } from '../../../types';
import { IResolvers } from 'apollo-server-express';

export const widgetResolvers: IResolvers = {
  Query: {
    object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(args.input, {
            ...rest,
          })
        : result;
    },

    widget_3ca6a981_d631_400f_a028_36513cc627ec: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_3ca6a981_d631_400f_a028_36513cc627ec(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_3ca6a981_d631_400f_a028_36513cc627ec(args.input, { ...rest })
        : result;
    },

    widget_d1787228_f48f_4aae_80d0_e03bd672311a: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_d1787228_f48f_4aae_80d0_e03bd672311a(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_d1787228_f48f_4aae_80d0_e03bd672311a(args.input, { ...rest })
        : result;
    },

    widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(args.input, { ...rest })
        : result;
    },

    widget_statistics17d19cab_0218_41cd_9677_3248728885a0: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics17d19cab_0218_41cd_9677_3248728885a0(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics17d19cab_0218_41cd_9677_3248728885a0(args.input, {
            ...rest,
          })
        : result;
    },
  },
};
