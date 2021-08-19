import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiJardin extends RESTDataSource {
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

  // Add Jardin
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('jardin', entity);

    // Sample HTTP POST request.
    // return this.post('jardin', entity);
  }

  // Delete Jardin
  async deleteEntity(id: string) {
    return KapiCrud.delete('jardin', id);

    // Sample HTTP DELETE request.
    // return this.delete(`jardin/${id}`);
  }

  // List Jardin
  async listEntity(params: any) {
    return KapiCrud.list('jardin', params);

    // Sample HTTP GET request.
    // return this.get('jardin', params);
  }

  // Get Jardin
  async getEntity(id: string) {
    return KapiCrud.get('jardin', id);

    // Sample HTTP GET request.
    // return this.get(`jardin/${id}`);
  }

  // Update Jardin
  async updateEntity(entity) {
    return KapiCrud.update('jardin', entity);

    // Sample HTTP PATCH request.
    // return this.patch(jardin, entity);
  }

  // Auto complete for Jardin
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('jardin');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { jardin: { displayValue: string; value?: any } }) => ({ ...obj.jardin }));
  }
}
