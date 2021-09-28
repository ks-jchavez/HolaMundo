import { IResolvers } from 'apollo-server-express';
import { DispatchCustomActionResults } from '../../../types';

export const entityResolvers: IResolvers = {
  Query: {
    // Timestamp Resolvers
    add101794: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api101794.addEntity(input.entity, input.parent),
    }),
    list101794: (_parent, args, { dataSources }) => ({ data: dataSources.api101794.listEntity(args) }),
    get101794: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101794.getEntity(id) }),
    delete101794: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101794.deleteEntity(id) }),
    update101794: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api101794.updateEntity(entity),
    }),
    autoComplete101794: (_parent, params, { dataSources }) => ({
      data: dataSources.api101794.getAutoCompleteValues(params.input),
    }),

    // Audio Resolvers
    add203467: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api203467.addEntity(input.entity, input.parent),
    }),
    list203467: (_parent, args, { dataSources }) => ({ data: dataSources.api203467.listEntity(args) }),
    get203467: (_parent, { id }, { dataSources }) => ({ data: dataSources.api203467.getEntity(id) }),
    delete203467: (_parent, { id }, { dataSources }) => ({ data: dataSources.api203467.deleteEntity(id) }),
    update203467: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api203467.updateEntity(entity),
    }),
    autoComplete203467: (_parent, params, { dataSources }) => ({
      data: dataSources.api203467.getAutoCompleteValues(params.input),
    }),
  },
};
