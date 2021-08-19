import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiTomatasos extends RESTDataSource {
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

  // Add Tomatasos
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('tomatasos', entity);

    // Sample HTTP POST request.
    // return this.post('tomatasos', entity);
  }

  // Delete Tomatasos
  async deleteEntity(id: string) {
    return KapiCrud.delete('tomatasos', id);

    // Sample HTTP DELETE request.
    // return this.delete(`tomatasos/${id}`);
  }

  // List Tomatasos
  async listEntity(params: any) {
    return KapiCrud.list('tomatasos', params);

    // Sample HTTP GET request.
    // return this.get('tomatasos', params);
  }

  // Get Tomatasos
  async getEntity(id: string) {
    return KapiCrud.get('tomatasos', id);

    // Sample HTTP GET request.
    // return this.get(`tomatasos/${id}`);
  }

  // Update Tomatasos
  async updateEntity(entity) {
    return KapiCrud.update('tomatasos', entity);

    // Sample HTTP PATCH request.
    // return this.patch(tomatasos, entity);
  }

  // Auto complete for Tomatasos
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('tomatasos');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { tomatasos: { displayValue: string; value?: any } }) => ({ ...obj.tomatasos }));
  }
}
