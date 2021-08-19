import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPuntuacion extends RESTDataSource {
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

  // Add Puntuacion
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('puntuacion', entity);

    // Sample HTTP POST request.
    // return this.post('puntuacion', entity);
  }

  // Delete Puntuacion
  async deleteEntity(id: string) {
    return KapiCrud.delete('puntuacion', id);

    // Sample HTTP DELETE request.
    // return this.delete(`puntuacion/${id}`);
  }

  // List Puntuacion
  async listEntity(params: any) {
    return KapiCrud.list('puntuacion', params);

    // Sample HTTP GET request.
    // return this.get('puntuacion', params);
  }

  // Get Puntuacion
  async getEntity(id: string) {
    return KapiCrud.get('puntuacion', id);

    // Sample HTTP GET request.
    // return this.get(`puntuacion/${id}`);
  }

  // Update Puntuacion
  async updateEntity(entity) {
    return KapiCrud.update('puntuacion', entity);

    // Sample HTTP PATCH request.
    // return this.patch(puntuacion, entity);
  }

  // Auto complete for Puntuacion
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('puntuacion');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { puntuacion: { displayValue: string; value?: any } }) => ({
      ...obj.puntuacion,
    }));
  }
}
