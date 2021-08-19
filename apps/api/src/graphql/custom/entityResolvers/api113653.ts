import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiTomatasosEu extends RESTDataSource {
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

  // Add TomatasosEu
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('tomatasosEu', entity);

    // Sample HTTP POST request.
    // return this.post('tomatasosEu', entity);
  }

  // Delete TomatasosEu
  async deleteEntity(id: string) {
    return KapiCrud.delete('tomatasosEu', id);

    // Sample HTTP DELETE request.
    // return this.delete(`tomatasosEu/${id}`);
  }

  // List TomatasosEu
  async listEntity(params: any) {
    return KapiCrud.list('tomatasosEu', params);

    // Sample HTTP GET request.
    // return this.get('tomatasosEu', params);
  }

  // Get TomatasosEu
  async getEntity(id: string) {
    return KapiCrud.get('tomatasosEu', id);

    // Sample HTTP GET request.
    // return this.get(`tomatasosEu/${id}`);
  }

  // Update TomatasosEu
  async updateEntity(entity) {
    return KapiCrud.update('tomatasosEu', entity);

    // Sample HTTP PATCH request.
    // return this.patch(tomatasosEu, entity);
  }

  // Auto complete for TomatasosEu
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('tomatasosEu');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { tomatasosEu: { displayValue: string; value?: any } }) => ({
      ...obj.tomatasosEu,
    }));
  }
}
