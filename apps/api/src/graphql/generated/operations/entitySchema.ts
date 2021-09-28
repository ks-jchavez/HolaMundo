import { gql } from 'apollo-server-express';

export const entitySchema = gql`
  input AutoCompleteByEntityInput {
    entity: String!
    offset: Int
    totalCount: Int
    limit: Int
  }

  input AddEntityParent {
    id: String!
    entity: String
  }

  input AddEntityInput {
    entity: JSON
    parent: AddEntityParent
  }

  input ListEntityInput {
    entity: JSON
  }

  type AutoCompleteOptionShape {
    displayValue: String!
    value: String
    id: String
  }

  type AutoCompleteResponse {
    data: [AutoCompleteOptionShape]
    errorMessage: String
  }

  extend type Query {
    # Timestamp
    add101794(input: AddEntityInput): GenericEntity
    list101794(input: ListEntityInput): GenericEntity
    get101794(id: String): GenericEntity
    delete101794(id: String): GenericEntity
    update101794(entity: JSON): GenericEntity
    autoComplete101794(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Audio
    add203467(input: AddEntityInput): GenericEntity
    list203467(input: ListEntityInput): GenericEntity
    get203467(id: String): GenericEntity
    delete203467(id: String): GenericEntity
    update203467(entity: JSON): GenericEntity
    autoComplete203467(input: AutoCompleteByEntityInput): AutoCompleteResponse
  }
`;
