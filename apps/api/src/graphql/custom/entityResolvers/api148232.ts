import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiMascotas extends RESTDataSource {
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

  // Add Mascotas
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('mascotas', entity);

    // Sample HTTP POST request.
    // return this.post('mascotas', entity);
  }

  // Delete Mascotas
  async deleteEntity(id: string) {
    return KapiCrud.delete('mascotas', id);

    // Sample HTTP DELETE request.
    // return this.delete(`mascotas/${id}`);
  }

  // List Mascotas
  async listEntity(params: any) {
    return KapiCrud.list('mascotas', params);

    // Sample HTTP GET request.
    // return this.get('mascotas', params);
  }

  // Get Mascotas
  async getEntity(id: string) {
    return KapiCrud.get('mascotas', id);

    // Sample HTTP GET request.
    // return this.get(`mascotas/${id}`);
  }

  // Update Mascotas
  async updateEntity(entity) {
    return KapiCrud.update('mascotas', entity);

    // Sample HTTP PATCH request.
    // return this.patch(mascotas, entity);
  }

  // Auto complete for Mascotas
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('mascotas');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { mascotas: { displayValue: string; value?: any } }) => ({ ...obj.mascotas }));
  }
}
