import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAccesorios extends RESTDataSource {
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

  // Add Accesorios
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('accesorios', entity);

    // Sample HTTP POST request.
    // return this.post('accesorios', entity);
  }

  // Delete Accesorios
  async deleteEntity(id: string) {
    return KapiCrud.delete('accesorios', id);

    // Sample HTTP DELETE request.
    // return this.delete(`accesorios/${id}`);
  }

  // List Accesorios
  async listEntity(params: any) {
    return KapiCrud.list('accesorios', params);

    // Sample HTTP GET request.
    // return this.get('accesorios', params);
  }

  // Get Accesorios
  async getEntity(id: string) {
    return KapiCrud.get('accesorios', id);

    // Sample HTTP GET request.
    // return this.get(`accesorios/${id}`);
  }

  // Update Accesorios
  async updateEntity(entity) {
    return KapiCrud.update('accesorios', entity);

    // Sample HTTP PATCH request.
    // return this.patch(accesorios, entity);
  }

  // Auto complete for Accesorios
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('accesorios');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { accesorios: { displayValue: string; value?: any } }) => ({
      ...obj.accesorios,
    }));
  }
}
