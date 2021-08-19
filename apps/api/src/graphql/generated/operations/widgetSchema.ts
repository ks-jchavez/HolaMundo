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
    # View: Workflow 1
    # Widget: Table of  1
    # Thing: Audio
    # Attributes: audio
    # Widget type: goal
    object_listing_8fd21fe9_e328_463c_b5cb_6a1b1feb0f83(input: DataListingArgs): ListingResult
    }
  `;
