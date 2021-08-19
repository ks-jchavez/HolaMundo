import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiLiverpool extends RESTDataSource {
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

  // Add Liverpool
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('liverpool', entity);

    // Sample HTTP POST request.
    // return this.post('liverpool', entity);
  }

  // Delete Liverpool
  async deleteEntity(id: string) {
    return KapiCrud.delete('liverpool', id);

    // Sample HTTP DELETE request.
    // return this.delete(`liverpool/${id}`);
  }

  // List Liverpool
  async listEntity(params: any) {
    return KapiCrud.list('liverpool', params);

    // Sample HTTP GET request.
    // return this.get('liverpool', params);
  }

  // Get Liverpool
  async getEntity(id: string) {
    return KapiCrud.get('liverpool', id);

    // Sample HTTP GET request.
    // return this.get(`liverpool/${id}`);
  }

  // Update Liverpool
  async updateEntity(entity) {
    return KapiCrud.update('liverpool', entity);

    // Sample HTTP PATCH request.
    // return this.patch(liverpool, entity);
  }

  // Auto complete for Liverpool
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('liverpool');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { liverpool: { displayValue: string; value?: any } }) => ({ ...obj.liverpool }));
  }
}
