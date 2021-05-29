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
  }

  input MultiTransFormationArgs {
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
    # View: netflix
    # Chart type: [WIDGET] FULL_TABLE
    object_listing_0a209c5c_96a5_4ffa_8b3e_babd376e9c0d(input: DataListingArgs): ListingResult

    # View: Graficas
    # Value: titulo
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] SUMMARY_TITLE
    summary_title_9d3cc67d_7be7_421b_a6a4_3a9afe9ea187(input: DataListingArgs): ListingResult

    # View: NETFLIX
    # Value: titulo
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] SUMMARY_TITLE
    summary_title_ceb0070d_193e_4c86_a2b2_25b20c3f61bf(input: DataListingArgs): ListingResult

    # View: Graficas --- Widget: Grafica de Tomatasos
    # Group by: titulo
    # No Aggregation
    # Value: actores
    # Value aggregated by: Total Count
    # Chart type: [WIDGET] BUBBLE_CHART
    widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c(input: DataAggregationArgs): GraphResult
  }
`;
