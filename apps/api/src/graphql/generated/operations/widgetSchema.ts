/* eslint-disable max-lines */
import { gql } from 'apollo-server-express';

export const widgetSchema = gql`
  type GraphResult {
    format: JSON
    results: JSON
    crossLinking: JSON
  }

  type MultiTransFormationResults {
    crossLinking: JSON
    format: JSON
    results: JSON
    transformation: String!
  }

  type ListingResult {
    data: JSON
    format: JSON
    pagination: JSON
  }

  input DataListingArgs {
    entity: String!
    attributes: JSON!
    filters: JSON
    pagination: JSON
    sorting: [JSON!]
  }

  input MultiTransFormationArgs {
    attributes: [String]
    entity: String!
    filters: JSON
    transformations: [String!]!
  }

  input CustomActionArgs {
    entity: String!
    functionName: String!
    filters: JSON
  }

    extend type Query {
          # Widget Summary
    # View: NETFLIX
    # Widget: Table of Titulo 1
    # Thing: Titulo
    # Attributes: titulo, laVeoONoLaVeo
    # Widget type: goal
    object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Widget 3
    # Value: mascotas - No Aggregation
    # Group by: relojes - No Aggregation
    widget_3ca6a981_d631_400f_a028_36513cc627ec(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Widget 4
    # Value: mascotas - No Aggregation
    # Group by: relojes - No Aggregation
    widget_d1787228_f48f_4aae_80d0_e03bd672311a(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Grafica de Tomatasos
    # Value: actores - Total Count
    # Group by: titulo - No Aggregation
    widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Widget 1
    # Value: mascotas
    widget_statistics17d19cab_0218_41cd_9677_3248728885a0(input: MultiTransFormationArgs): [MultiTransFormationResults]
    }
  `;
