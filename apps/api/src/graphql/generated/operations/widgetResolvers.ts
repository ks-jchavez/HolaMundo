/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { DataListingArgs } from '../../../types';
import { IResolvers } from 'apollo-server-express';

export const widgetResolvers: IResolvers = {
  Query: {
    object_listing_8fd21fe9_e328_463c_b5cb_6a1b1feb0f83: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_8fd21fe9_e328_463c_b5cb_6a1b1feb0f83(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_8fd21fe9_e328_463c_b5cb_6a1b1feb0f83(args.input, {
            ...rest,
          })
        : result;
    },
  },
};
