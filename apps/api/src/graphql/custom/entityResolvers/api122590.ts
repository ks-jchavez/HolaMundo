import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSala extends RESTDataSource {
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

  // Add Sala
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('sala', entity);

    // Sample HTTP POST request.
    // return this.post('sala', entity);
  }

  // Delete Sala
  async deleteEntity(id: string) {
    return KapiCrud.delete('sala', id);

    // Sample HTTP DELETE request.
    // return this.delete(`sala/${id}`);
  }

  // List Sala
  async listEntity(params: any) {
    return KapiCrud.list('sala', params);

    // Sample HTTP GET request.
    // return this.get('sala', params);
  }

  // Get Sala
  async getEntity(id: string) {
    return KapiCrud.get('sala', id);

    // Sample HTTP GET request.
    // return this.get(`sala/${id}`);
  }

  // Update Sala
  async updateEntity(entity) {
    return KapiCrud.update('sala', entity);

    // Sample HTTP PATCH request.
    // return this.patch(sala, entity);
  }

  // Auto complete for Sala
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('sala');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { sala: { displayValue: string; value?: any } }) => ({ ...obj.sala }));
  }
}
