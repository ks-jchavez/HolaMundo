import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRecamara extends RESTDataSource {
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

  // Add Recamara
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('recamara', entity);

    // Sample HTTP POST request.
    // return this.post('recamara', entity);
  }

  // Delete Recamara
  async deleteEntity(id: string) {
    return KapiCrud.delete('recamara', id);

    // Sample HTTP DELETE request.
    // return this.delete(`recamara/${id}`);
  }

  // List Recamara
  async listEntity(params: any) {
    return KapiCrud.list('recamara', params);

    // Sample HTTP GET request.
    // return this.get('recamara', params);
  }

  // Get Recamara
  async getEntity(id: string) {
    return KapiCrud.get('recamara', id);

    // Sample HTTP GET request.
    // return this.get(`recamara/${id}`);
  }

  // Update Recamara
  async updateEntity(entity) {
    return KapiCrud.update('recamara', entity);

    // Sample HTTP PATCH request.
    // return this.patch(recamara, entity);
  }

  // Auto complete for Recamara
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('recamara');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { recamara: { displayValue: string; value?: any } }) => ({ ...obj.recamara }));
  }
}
