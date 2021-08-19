import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRelojes extends RESTDataSource {
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

  // Add Relojes
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('relojes', entity);

    // Sample HTTP POST request.
    // return this.post('relojes', entity);
  }

  // Delete Relojes
  async deleteEntity(id: string) {
    return KapiCrud.delete('relojes', id);

    // Sample HTTP DELETE request.
    // return this.delete(`relojes/${id}`);
  }

  // List Relojes
  async listEntity(params: any) {
    return KapiCrud.list('relojes', params);

    // Sample HTTP GET request.
    // return this.get('relojes', params);
  }

  // Get Relojes
  async getEntity(id: string) {
    return KapiCrud.get('relojes', id);

    // Sample HTTP GET request.
    // return this.get(`relojes/${id}`);
  }

  // Update Relojes
  async updateEntity(entity) {
    return KapiCrud.update('relojes', entity);

    // Sample HTTP PATCH request.
    // return this.patch(relojes, entity);
  }

  // Auto complete for Relojes
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('relojes');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { relojes: { displayValue: string; value?: any } }) => ({ ...obj.relojes }));
  }
}
