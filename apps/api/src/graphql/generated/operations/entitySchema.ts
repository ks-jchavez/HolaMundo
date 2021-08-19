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

    # Titulo
    add101800(input: AddEntityInput): GenericEntity
    list101800(input: ListEntityInput): GenericEntity
    get101800(id: String): GenericEntity
    delete101800(id: String): GenericEntity
    update101800(entity: JSON): GenericEntity
    autoComplete101800(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Actores
    add101801(input: AddEntityInput): GenericEntity
    list101801(input: ListEntityInput): GenericEntity
    get101801(id: String): GenericEntity
    delete101801(id: String): GenericEntity
    update101801(entity: JSON): GenericEntity
    autoComplete101801(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Duracion
    add101802(input: AddEntityInput): GenericEntity
    list101802(input: ListEntityInput): GenericEntity
    get101802(id: String): GenericEntity
    delete101802(id: String): GenericEntity
    update101802(entity: JSON): GenericEntity
    autoComplete101802(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Categoria
    add101804(input: AddEntityInput): GenericEntity
    list101804(input: ListEntityInput): GenericEntity
    get101804(id: String): GenericEntity
    delete101804(id: String): GenericEntity
    update101804(entity: JSON): GenericEntity
    autoComplete101804(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Puntuacion
    add101805(input: AddEntityInput): GenericEntity
    list101805(input: ListEntityInput): GenericEntity
    get101805(id: String): GenericEntity
    delete101805(id: String): GenericEntity
    update101805(entity: JSON): GenericEntity
    autoComplete101805(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Tomatasos
    add101806(input: AddEntityInput): GenericEntity
    list101806(input: ListEntityInput): GenericEntity
    get101806(id: String): GenericEntity
    delete101806(id: String): GenericEntity
    update101806(entity: JSON): GenericEntity
    autoComplete101806(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Creditos
    add102138(input: AddEntityInput): GenericEntity
    list102138(input: ListEntityInput): GenericEntity
    get102138(id: String): GenericEntity
    delete102138(id: String): GenericEntity
    update102138(entity: JSON): GenericEntity
    autoComplete102138(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Ranking
    add102139(input: AddEntityInput): GenericEntity
    list102139(input: ListEntityInput): GenericEntity
    get102139(id: String): GenericEntity
    delete102139(id: String): GenericEntity
    update102139(entity: JSON): GenericEntity
    autoComplete102139(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # TomatasosMex
    add113652(input: AddEntityInput): GenericEntity
    list113652(input: ListEntityInput): GenericEntity
    get113652(id: String): GenericEntity
    delete113652(id: String): GenericEntity
    update113652(entity: JSON): GenericEntity
    autoComplete113652(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # TomatasosEu
    add113653(input: AddEntityInput): GenericEntity
    list113653(input: ListEntityInput): GenericEntity
    get113653(id: String): GenericEntity
    delete113653(id: String): GenericEntity
    update113653(entity: JSON): GenericEntity
    autoComplete113653(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # LaVeoONoLaVeo
    add113734(input: AddEntityInput): GenericEntity
    list113734(input: ListEntityInput): GenericEntity
    get113734(id: String): GenericEntity
    delete113734(id: String): GenericEntity
    update113734(entity: JSON): GenericEntity
    autoComplete113734(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Ikea
    add122586(input: AddEntityInput): GenericEntity
    list122586(input: ListEntityInput): GenericEntity
    get122586(id: String): GenericEntity
    delete122586(id: String): GenericEntity
    update122586(entity: JSON): GenericEntity
    autoComplete122586(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Cocina
    add122587(input: AddEntityInput): GenericEntity
    list122587(input: ListEntityInput): GenericEntity
    get122587(id: String): GenericEntity
    delete122587(id: String): GenericEntity
    update122587(entity: JSON): GenericEntity
    autoComplete122587(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Recamara
    add122588(input: AddEntityInput): GenericEntity
    list122588(input: ListEntityInput): GenericEntity
    get122588(id: String): GenericEntity
    delete122588(id: String): GenericEntity
    update122588(entity: JSON): GenericEntity
    autoComplete122588(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Jardin
    add122589(input: AddEntityInput): GenericEntity
    list122589(input: ListEntityInput): GenericEntity
    get122589(id: String): GenericEntity
    delete122589(id: String): GenericEntity
    update122589(entity: JSON): GenericEntity
    autoComplete122589(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Sala
    add122590(input: AddEntityInput): GenericEntity
    list122590(input: ListEntityInput): GenericEntity
    get122590(id: String): GenericEntity
    delete122590(id: String): GenericEntity
    update122590(entity: JSON): GenericEntity
    autoComplete122590(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Mixup
    add123930(input: AddEntityInput): GenericEntity
    list123930(input: ListEntityInput): GenericEntity
    get123930(id: String): GenericEntity
    delete123930(id: String): GenericEntity
    update123930(entity: JSON): GenericEntity
    autoComplete123930(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Tecnologia
    add123932(input: AddEntityInput): GenericEntity
    list123932(input: ListEntityInput): GenericEntity
    get123932(id: String): GenericEntity
    delete123932(id: String): GenericEntity
    update123932(entity: JSON): GenericEntity
    autoComplete123932(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Accesorios
    add123933(input: AddEntityInput): GenericEntity
    list123933(input: ListEntityInput): GenericEntity
    get123933(id: String): GenericEntity
    delete123933(id: String): GenericEntity
    update123933(entity: JSON): GenericEntity
    autoComplete123933(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Bocinas
    add123934(input: AddEntityInput): GenericEntity
    list123934(input: ListEntityInput): GenericEntity
    get123934(id: String): GenericEntity
    delete123934(id: String): GenericEntity
    update123934(entity: JSON): GenericEntity
    autoComplete123934(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # VideoGames
    add123935(input: AddEntityInput): GenericEntity
    list123935(input: ListEntityInput): GenericEntity
    get123935(id: String): GenericEntity
    delete123935(id: String): GenericEntity
    update123935(entity: JSON): GenericEntity
    autoComplete123935(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SmartHome
    add123936(input: AddEntityInput): GenericEntity
    list123936(input: ListEntityInput): GenericEntity
    get123936(id: String): GenericEntity
    delete123936(id: String): GenericEntity
    update123936(entity: JSON): GenericEntity
    autoComplete123936(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Liverpool
    add148231(input: AddEntityInput): GenericEntity
    list148231(input: ListEntityInput): GenericEntity
    get148231(id: String): GenericEntity
    delete148231(id: String): GenericEntity
    update148231(entity: JSON): GenericEntity
    autoComplete148231(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Mascotas
    add148232(input: AddEntityInput): GenericEntity
    list148232(input: ListEntityInput): GenericEntity
    get148232(id: String): GenericEntity
    delete148232(id: String): GenericEntity
    update148232(entity: JSON): GenericEntity
    autoComplete148232(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Relojes
    add148233(input: AddEntityInput): GenericEntity
    list148233(input: ListEntityInput): GenericEntity
    get148233(id: String): GenericEntity
    delete148233(id: String): GenericEntity
    update148233(entity: JSON): GenericEntity
    autoComplete148233(input: AutoCompleteByEntityInput): AutoCompleteResponse
  }
`;
