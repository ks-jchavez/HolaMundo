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

    // Titulo Resolvers
    add101800: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api101800.addEntity(input.entity, input.parent),
    }),
    list101800: (_parent, args, { dataSources }) => ({ data: dataSources.api101800.listEntity(args) }),
    get101800: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101800.getEntity(id) }),
    delete101800: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101800.deleteEntity(id) }),
    update101800: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api101800.updateEntity(entity),
    }),
    autoComplete101800: (_parent, params, { dataSources }) => ({
      data: dataSources.api101800.getAutoCompleteValues(params.input),
    }),

    // Actores Resolvers
    add101801: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api101801.addEntity(input.entity, input.parent),
    }),
    list101801: (_parent, args, { dataSources }) => ({ data: dataSources.api101801.listEntity(args) }),
    get101801: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101801.getEntity(id) }),
    delete101801: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101801.deleteEntity(id) }),
    update101801: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api101801.updateEntity(entity),
    }),
    autoComplete101801: (_parent, params, { dataSources }) => ({
      data: dataSources.api101801.getAutoCompleteValues(params.input),
    }),

    // Duracion Resolvers
    add101802: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api101802.addEntity(input.entity, input.parent),
    }),
    list101802: (_parent, args, { dataSources }) => ({ data: dataSources.api101802.listEntity(args) }),
    get101802: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101802.getEntity(id) }),
    delete101802: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101802.deleteEntity(id) }),
    update101802: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api101802.updateEntity(entity),
    }),
    autoComplete101802: (_parent, params, { dataSources }) => ({
      data: dataSources.api101802.getAutoCompleteValues(params.input),
    }),

    // Categoria Resolvers
    add101804: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api101804.addEntity(input.entity, input.parent),
    }),
    list101804: (_parent, args, { dataSources }) => ({ data: dataSources.api101804.listEntity(args) }),
    get101804: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101804.getEntity(id) }),
    delete101804: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101804.deleteEntity(id) }),
    update101804: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api101804.updateEntity(entity),
    }),
    autoComplete101804: (_parent, params, { dataSources }) => ({
      data: dataSources.api101804.getAutoCompleteValues(params.input),
    }),

    // Puntuacion Resolvers
    add101805: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api101805.addEntity(input.entity, input.parent),
    }),
    list101805: (_parent, args, { dataSources }) => ({ data: dataSources.api101805.listEntity(args) }),
    get101805: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101805.getEntity(id) }),
    delete101805: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101805.deleteEntity(id) }),
    update101805: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api101805.updateEntity(entity),
    }),
    autoComplete101805: (_parent, params, { dataSources }) => ({
      data: dataSources.api101805.getAutoCompleteValues(params.input),
    }),

    // Tomatasos Resolvers
    add101806: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api101806.addEntity(input.entity, input.parent),
    }),
    list101806: (_parent, args, { dataSources }) => ({ data: dataSources.api101806.listEntity(args) }),
    get101806: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101806.getEntity(id) }),
    delete101806: (_parent, { id }, { dataSources }) => ({ data: dataSources.api101806.deleteEntity(id) }),
    update101806: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api101806.updateEntity(entity),
    }),
    autoComplete101806: (_parent, params, { dataSources }) => ({
      data: dataSources.api101806.getAutoCompleteValues(params.input),
    }),

    // Creditos Resolvers
    add102138: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api102138.addEntity(input.entity, input.parent),
    }),
    list102138: (_parent, args, { dataSources }) => ({ data: dataSources.api102138.listEntity(args) }),
    get102138: (_parent, { id }, { dataSources }) => ({ data: dataSources.api102138.getEntity(id) }),
    delete102138: (_parent, { id }, { dataSources }) => ({ data: dataSources.api102138.deleteEntity(id) }),
    update102138: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api102138.updateEntity(entity),
    }),
    autoComplete102138: (_parent, params, { dataSources }) => ({
      data: dataSources.api102138.getAutoCompleteValues(params.input),
    }),

    // Ranking Resolvers
    add102139: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api102139.addEntity(input.entity, input.parent),
    }),
    list102139: (_parent, args, { dataSources }) => ({ data: dataSources.api102139.listEntity(args) }),
    get102139: (_parent, { id }, { dataSources }) => ({ data: dataSources.api102139.getEntity(id) }),
    delete102139: (_parent, { id }, { dataSources }) => ({ data: dataSources.api102139.deleteEntity(id) }),
    update102139: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api102139.updateEntity(entity),
    }),
    autoComplete102139: (_parent, params, { dataSources }) => ({
      data: dataSources.api102139.getAutoCompleteValues(params.input),
    }),

    // TomatasosMex Resolvers
    add113652: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api113652.addEntity(input.entity, input.parent),
    }),
    list113652: (_parent, args, { dataSources }) => ({ data: dataSources.api113652.listEntity(args) }),
    get113652: (_parent, { id }, { dataSources }) => ({ data: dataSources.api113652.getEntity(id) }),
    delete113652: (_parent, { id }, { dataSources }) => ({ data: dataSources.api113652.deleteEntity(id) }),
    update113652: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api113652.updateEntity(entity),
    }),
    autoComplete113652: (_parent, params, { dataSources }) => ({
      data: dataSources.api113652.getAutoCompleteValues(params.input),
    }),

    // TomatasosEu Resolvers
    add113653: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api113653.addEntity(input.entity, input.parent),
    }),
    list113653: (_parent, args, { dataSources }) => ({ data: dataSources.api113653.listEntity(args) }),
    get113653: (_parent, { id }, { dataSources }) => ({ data: dataSources.api113653.getEntity(id) }),
    delete113653: (_parent, { id }, { dataSources }) => ({ data: dataSources.api113653.deleteEntity(id) }),
    update113653: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api113653.updateEntity(entity),
    }),
    autoComplete113653: (_parent, params, { dataSources }) => ({
      data: dataSources.api113653.getAutoCompleteValues(params.input),
    }),

    // LaVeoONoLaVeo Resolvers
    add113734: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api113734.addEntity(input.entity, input.parent),
    }),
    list113734: (_parent, args, { dataSources }) => ({ data: dataSources.api113734.listEntity(args) }),
    get113734: (_parent, { id }, { dataSources }) => ({ data: dataSources.api113734.getEntity(id) }),
    delete113734: (_parent, { id }, { dataSources }) => ({ data: dataSources.api113734.deleteEntity(id) }),
    update113734: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api113734.updateEntity(entity),
    }),
    autoComplete113734: (_parent, params, { dataSources }) => ({
      data: dataSources.api113734.getAutoCompleteValues(params.input),
    }),

    // Ikea Resolvers
    add122586: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api122586.addEntity(input.entity, input.parent),
    }),
    list122586: (_parent, args, { dataSources }) => ({ data: dataSources.api122586.listEntity(args) }),
    get122586: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122586.getEntity(id) }),
    delete122586: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122586.deleteEntity(id) }),
    update122586: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api122586.updateEntity(entity),
    }),
    autoComplete122586: (_parent, params, { dataSources }) => ({
      data: dataSources.api122586.getAutoCompleteValues(params.input),
    }),

    // Cocina Resolvers
    add122587: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api122587.addEntity(input.entity, input.parent),
    }),
    list122587: (_parent, args, { dataSources }) => ({ data: dataSources.api122587.listEntity(args) }),
    get122587: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122587.getEntity(id) }),
    delete122587: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122587.deleteEntity(id) }),
    update122587: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api122587.updateEntity(entity),
    }),
    autoComplete122587: (_parent, params, { dataSources }) => ({
      data: dataSources.api122587.getAutoCompleteValues(params.input),
    }),

    // Recamara Resolvers
    add122588: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api122588.addEntity(input.entity, input.parent),
    }),
    list122588: (_parent, args, { dataSources }) => ({ data: dataSources.api122588.listEntity(args) }),
    get122588: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122588.getEntity(id) }),
    delete122588: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122588.deleteEntity(id) }),
    update122588: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api122588.updateEntity(entity),
    }),
    autoComplete122588: (_parent, params, { dataSources }) => ({
      data: dataSources.api122588.getAutoCompleteValues(params.input),
    }),

    // Jardin Resolvers
    add122589: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api122589.addEntity(input.entity, input.parent),
    }),
    list122589: (_parent, args, { dataSources }) => ({ data: dataSources.api122589.listEntity(args) }),
    get122589: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122589.getEntity(id) }),
    delete122589: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122589.deleteEntity(id) }),
    update122589: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api122589.updateEntity(entity),
    }),
    autoComplete122589: (_parent, params, { dataSources }) => ({
      data: dataSources.api122589.getAutoCompleteValues(params.input),
    }),

    // Sala Resolvers
    add122590: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api122590.addEntity(input.entity, input.parent),
    }),
    list122590: (_parent, args, { dataSources }) => ({ data: dataSources.api122590.listEntity(args) }),
    get122590: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122590.getEntity(id) }),
    delete122590: (_parent, { id }, { dataSources }) => ({ data: dataSources.api122590.deleteEntity(id) }),
    update122590: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api122590.updateEntity(entity),
    }),
    autoComplete122590: (_parent, params, { dataSources }) => ({
      data: dataSources.api122590.getAutoCompleteValues(params.input),
    }),
  },
};
