import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDuracion extends RESTDataSource {
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

  // Add Duracion
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('duracion', entity);

    // Sample HTTP POST request.
    // return this.post('duracion', entity);
  }

  // Delete Duracion
  async deleteEntity(id: string) {
    return KapiCrud.delete('duracion', id);

    // Sample HTTP DELETE request.
    // return this.delete(`duracion/${id}`);
  }

  // List Duracion
  async listEntity(params: any) {
    return KapiCrud.list('duracion', params);

    // Sample HTTP GET request.
    // return this.get('duracion', params);
  }

  // Get Duracion
  async getEntity(id: string) {
    return KapiCrud.get('duracion', id);

    // Sample HTTP GET request.
    // return this.get(`duracion/${id}`);
  }

  // Update Duracion
  async updateEntity(entity) {
    return KapiCrud.update('duracion', entity);

    // Sample HTTP PATCH request.
    // return this.patch(duracion, entity);
  }

  // Auto complete for Duracion
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('duracion');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { duracion: { displayValue: string; value?: any } }) => ({ ...obj.duracion }));
  }
}
