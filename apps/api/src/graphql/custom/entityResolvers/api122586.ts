import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiIkea extends RESTDataSource {
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

  // Add Ikea
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ikea', entity);

    // Sample HTTP POST request.
    // return this.post('ikea', entity);
  }

  // Delete Ikea
  async deleteEntity(id: string) {
    return KapiCrud.delete('ikea', id);

    // Sample HTTP DELETE request.
    // return this.delete(`ikea/${id}`);
  }

  // List Ikea
  async listEntity(params: any) {
    return KapiCrud.list('ikea', params);

    // Sample HTTP GET request.
    // return this.get('ikea', params);
  }

  // Get Ikea
  async getEntity(id: string) {
    return KapiCrud.get('ikea', id);

    // Sample HTTP GET request.
    // return this.get(`ikea/${id}`);
  }

  // Update Ikea
  async updateEntity(entity) {
    return KapiCrud.update('ikea', entity);

    // Sample HTTP PATCH request.
    // return this.patch(ikea, entity);
  }

  // Auto complete for Ikea
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ikea');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { ikea: { displayValue: string; value?: any } }) => ({ ...obj.ikea }));
  }
}
