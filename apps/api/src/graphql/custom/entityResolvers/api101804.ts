import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCategoria extends RESTDataSource {
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

  // Add Categoria
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('categoria', entity);

    // Sample HTTP POST request.
    // return this.post('categoria', entity);
  }

  // Delete Categoria
  async deleteEntity(id: string) {
    return KapiCrud.delete('categoria', id);

    // Sample HTTP DELETE request.
    // return this.delete(`categoria/${id}`);
  }

  // List Categoria
  async listEntity(params: any) {
    return KapiCrud.list('categoria', params);

    // Sample HTTP GET request.
    // return this.get('categoria', params);
  }

  // Get Categoria
  async getEntity(id: string) {
    return KapiCrud.get('categoria', id);

    // Sample HTTP GET request.
    // return this.get(`categoria/${id}`);
  }

  // Update Categoria
  async updateEntity(entity) {
    return KapiCrud.update('categoria', entity);

    // Sample HTTP PATCH request.
    // return this.patch(categoria, entity);
  }

  // Auto complete for Categoria
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('categoria');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { categoria: { displayValue: string; value?: any } }) => ({ ...obj.categoria }));
  }
}
