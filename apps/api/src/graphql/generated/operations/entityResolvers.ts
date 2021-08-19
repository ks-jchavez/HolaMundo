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

    // Mixup Resolvers
    add123930: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api123930.addEntity(input.entity, input.parent),
    }),
    list123930: (_parent, args, { dataSources }) => ({ data: dataSources.api123930.listEntity(args) }),
    get123930: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123930.getEntity(id) }),
    delete123930: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123930.deleteEntity(id) }),
    update123930: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api123930.updateEntity(entity),
    }),
    autoComplete123930: (_parent, params, { dataSources }) => ({
      data: dataSources.api123930.getAutoCompleteValues(params.input),
    }),

    // Tecnologia Resolvers
    add123932: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api123932.addEntity(input.entity, input.parent),
    }),
    list123932: (_parent, args, { dataSources }) => ({ data: dataSources.api123932.listEntity(args) }),
    get123932: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123932.getEntity(id) }),
    delete123932: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123932.deleteEntity(id) }),
    update123932: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api123932.updateEntity(entity),
    }),
    autoComplete123932: (_parent, params, { dataSources }) => ({
      data: dataSources.api123932.getAutoCompleteValues(params.input),
    }),

    // Accesorios Resolvers
    add123933: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api123933.addEntity(input.entity, input.parent),
    }),
    list123933: (_parent, args, { dataSources }) => ({ data: dataSources.api123933.listEntity(args) }),
    get123933: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123933.getEntity(id) }),
    delete123933: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123933.deleteEntity(id) }),
    update123933: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api123933.updateEntity(entity),
    }),
    autoComplete123933: (_parent, params, { dataSources }) => ({
      data: dataSources.api123933.getAutoCompleteValues(params.input),
    }),

    // Bocinas Resolvers
    add123934: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api123934.addEntity(input.entity, input.parent),
    }),
    list123934: (_parent, args, { dataSources }) => ({ data: dataSources.api123934.listEntity(args) }),
    get123934: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123934.getEntity(id) }),
    delete123934: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123934.deleteEntity(id) }),
    update123934: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api123934.updateEntity(entity),
    }),
    autoComplete123934: (_parent, params, { dataSources }) => ({
      data: dataSources.api123934.getAutoCompleteValues(params.input),
    }),

    // VideoGames Resolvers
    add123935: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api123935.addEntity(input.entity, input.parent),
    }),
    list123935: (_parent, args, { dataSources }) => ({ data: dataSources.api123935.listEntity(args) }),
    get123935: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123935.getEntity(id) }),
    delete123935: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123935.deleteEntity(id) }),
    update123935: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api123935.updateEntity(entity),
    }),
    autoComplete123935: (_parent, params, { dataSources }) => ({
      data: dataSources.api123935.getAutoCompleteValues(params.input),
    }),

    // SmartHome Resolvers
    add123936: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api123936.addEntity(input.entity, input.parent),
    }),
    list123936: (_parent, args, { dataSources }) => ({ data: dataSources.api123936.listEntity(args) }),
    get123936: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123936.getEntity(id) }),
    delete123936: (_parent, { id }, { dataSources }) => ({ data: dataSources.api123936.deleteEntity(id) }),
    update123936: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api123936.updateEntity(entity),
    }),
    autoComplete123936: (_parent, params, { dataSources }) => ({
      data: dataSources.api123936.getAutoCompleteValues(params.input),
    }),

    // Liverpool Resolvers
    add148231: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api148231.addEntity(input.entity, input.parent),
    }),
    list148231: (_parent, args, { dataSources }) => ({ data: dataSources.api148231.listEntity(args) }),
    get148231: (_parent, { id }, { dataSources }) => ({ data: dataSources.api148231.getEntity(id) }),
    delete148231: (_parent, { id }, { dataSources }) => ({ data: dataSources.api148231.deleteEntity(id) }),
    update148231: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api148231.updateEntity(entity),
    }),
    autoComplete148231: (_parent, params, { dataSources }) => ({
      data: dataSources.api148231.getAutoCompleteValues(params.input),
    }),

    // Mascotas Resolvers
    add148232: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api148232.addEntity(input.entity, input.parent),
    }),
    list148232: (_parent, args, { dataSources }) => ({ data: dataSources.api148232.listEntity(args) }),
    get148232: (_parent, { id }, { dataSources }) => ({ data: dataSources.api148232.getEntity(id) }),
    delete148232: (_parent, { id }, { dataSources }) => ({ data: dataSources.api148232.deleteEntity(id) }),
    update148232: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api148232.updateEntity(entity),
    }),
    autoComplete148232: (_parent, params, { dataSources }) => ({
      data: dataSources.api148232.getAutoCompleteValues(params.input),
    }),

    // Relojes Resolvers
    add148233: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api148233.addEntity(input.entity, input.parent),
    }),
    list148233: (_parent, args, { dataSources }) => ({ data: dataSources.api148233.listEntity(args) }),
    get148233: (_parent, { id }, { dataSources }) => ({ data: dataSources.api148233.getEntity(id) }),
    delete148233: (_parent, { id }, { dataSources }) => ({ data: dataSources.api148233.deleteEntity(id) }),
    update148233: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api148233.updateEntity(entity),
    }),
    autoComplete148233: (_parent, params, { dataSources }) => ({
      data: dataSources.api148233.getAutoCompleteValues(params.input),
    }),
  },
};
