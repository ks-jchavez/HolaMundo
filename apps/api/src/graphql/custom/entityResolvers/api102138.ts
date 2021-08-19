import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCreditos extends RESTDataSource {
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

  // Add Creditos
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('creditos', entity);

    // Sample HTTP POST request.
    // return this.post('creditos', entity);
  }

  // Delete Creditos
  async deleteEntity(id: string) {
    return KapiCrud.delete('creditos', id);

    // Sample HTTP DELETE request.
    // return this.delete(`creditos/${id}`);
  }

  // List Creditos
  async listEntity(params: any) {
    return KapiCrud.list('creditos', params);

    // Sample HTTP GET request.
    // return this.get('creditos', params);
  }

  // Get Creditos
  async getEntity(id: string) {
    return KapiCrud.get('creditos', id);

    // Sample HTTP GET request.
    // return this.get(`creditos/${id}`);
  }

  // Update Creditos
  async updateEntity(entity) {
    return KapiCrud.update('creditos', entity);

    // Sample HTTP PATCH request.
    // return this.patch(creditos, entity);
  }

  // Auto complete for Creditos
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('creditos');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { creditos: { displayValue: string; value?: any } }) => ({ ...obj.creditos }));
  }
}
