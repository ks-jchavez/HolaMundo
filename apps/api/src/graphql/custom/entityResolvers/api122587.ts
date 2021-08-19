import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCocina extends RESTDataSource {
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

  // Add Cocina
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('cocina', entity);

    // Sample HTTP POST request.
    // return this.post('cocina', entity);
  }

  // Delete Cocina
  async deleteEntity(id: string) {
    return KapiCrud.delete('cocina', id);

    // Sample HTTP DELETE request.
    // return this.delete(`cocina/${id}`);
  }

  // List Cocina
  async listEntity(params: any) {
    return KapiCrud.list('cocina', params);

    // Sample HTTP GET request.
    // return this.get('cocina', params);
  }

  // Get Cocina
  async getEntity(id: string) {
    return KapiCrud.get('cocina', id);

    // Sample HTTP GET request.
    // return this.get(`cocina/${id}`);
  }

  // Update Cocina
  async updateEntity(entity) {
    return KapiCrud.update('cocina', entity);

    // Sample HTTP PATCH request.
    // return this.patch(cocina, entity);
  }

  // Auto complete for Cocina
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('cocina');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { cocina: { displayValue: string; value?: any } }) => ({ ...obj.cocina }));
  }
}
