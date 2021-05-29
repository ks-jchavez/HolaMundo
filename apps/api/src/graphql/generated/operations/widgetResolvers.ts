/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import { DataListingArgs, DataAggregationArgs } from '../../../types';
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

    summary_title_9d3cc67d_7be7_421b_a6a4_3a9afe9ea187: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.summary_title_9d3cc67d_7be7_421b_a6a4_3a9afe9ea187(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.summary_title_9d3cc67d_7be7_421b_a6a4_3a9afe9ea187(args.input, {
            ...rest,
          })
        : result;
    },

    summary_title_ceb0070d_193e_4c86_a2b2_25b20c3f61bf: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.summary_title_ceb0070d_193e_4c86_a2b2_25b20c3f61bf(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.summary_title_ceb0070d_193e_4c86_a2b2_25b20c3f61bf(args.input, {
            ...rest,
          })
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
  },
};
