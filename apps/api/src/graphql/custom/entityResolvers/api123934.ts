import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBocinas extends RESTDataSource {
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

  // Add Bocinas
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('bocinas', entity);

    // Sample HTTP POST request.
    // return this.post('bocinas', entity);
  }

  // Delete Bocinas
  async deleteEntity(id: string) {
    return KapiCrud.delete('bocinas', id);

    // Sample HTTP DELETE request.
    // return this.delete(`bocinas/${id}`);
  }

  // List Bocinas
  async listEntity(params: any) {
    return KapiCrud.list('bocinas', params);

    // Sample HTTP GET request.
    // return this.get('bocinas', params);
  }

  // Get Bocinas
  async getEntity(id: string) {
    return KapiCrud.get('bocinas', id);

    // Sample HTTP GET request.
    // return this.get(`bocinas/${id}`);
  }

  // Update Bocinas
  async updateEntity(entity) {
    return KapiCrud.update('bocinas', entity);

    // Sample HTTP PATCH request.
    // return this.patch(bocinas, entity);
  }

  // Auto complete for Bocinas
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('bocinas');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { bocinas: { displayValue: string; value?: any } }) => ({ ...obj.bocinas }));
  }
}
