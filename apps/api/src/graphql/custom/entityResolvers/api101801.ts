import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiActores extends RESTDataSource {
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

  // Add Actores
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('actores', entity);

    // Sample HTTP POST request.
    // return this.post('actores', entity);
  }

  // Delete Actores
  async deleteEntity(id: string) {
    return KapiCrud.delete('actores', id);

    // Sample HTTP DELETE request.
    // return this.delete(`actores/${id}`);
  }

  // List Actores
  async listEntity(params: any) {
    return KapiCrud.list('actores', params);

    // Sample HTTP GET request.
    // return this.get('actores', params);
  }

  // Get Actores
  async getEntity(id: string) {
    return KapiCrud.get('actores', id);

    // Sample HTTP GET request.
    // return this.get(`actores/${id}`);
  }

  // Update Actores
  async updateEntity(entity) {
    return KapiCrud.update('actores', entity);

    // Sample HTTP PATCH request.
    // return this.patch(actores, entity);
  }

  // Auto complete for Actores
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('actores');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { actores: { displayValue: string; value?: any } }) => ({ ...obj.actores }));
  }
}
