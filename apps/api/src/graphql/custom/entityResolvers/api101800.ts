import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiTitulo extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://put.your.api.here/';
    // You can access the token, data sources,
    // and the current user through 'this.context'.
  }

  willSendRequest(request: RequestOptions) {
    // Uncomment the following line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Uncomment the following line to set params token.
    // request.params.set('api_key', this.context.token);
  }

  // Add Titulo
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('titulo', entity);

    // Sample HTTP POST request.
    // return this.post('titulo', entity);
  }

  // Delete Titulo
  async deleteEntity(id: string) {
    return KapiCrud.delete('titulo', id);

    // Sample HTTP DELETE request.
    // return this.delete(`titulo/${id}`);
  }

  // List Titulo
  async listEntity(params: any) {
    return KapiCrud.list('titulo', params);

    // Sample HTTP GET request.
    // return this.get('titulo', params);
  }

  // Get Titulo
  async getEntity(id: string) {
    return KapiCrud.get('titulo', id);

    // Sample HTTP GET request.
    // return this.get(`titulo/${id}`);
  }

  // Update Titulo
  async updateEntity(entity) {
    return KapiCrud.update('titulo', entity);

    // Sample HTTP PATCH request.
    // return this.patch(titulo, entity);
  }

  // Auto complete for Titulo
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('titulo');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { titulo: { displayValue: string; value?: any } }) => ({ ...obj.titulo }));
  }
}
