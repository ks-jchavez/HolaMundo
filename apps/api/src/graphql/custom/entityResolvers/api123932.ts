import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiTecnologia extends RESTDataSource {
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

  // Add Tecnologia
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('tecnologia', entity);

    // Sample HTTP POST request.
    // return this.post('tecnologia', entity);
  }

  // Delete Tecnologia
  async deleteEntity(id: string) {
    return KapiCrud.delete('tecnologia', id);

    // Sample HTTP DELETE request.
    // return this.delete(`tecnologia/${id}`);
  }

  // List Tecnologia
  async listEntity(params: any) {
    return KapiCrud.list('tecnologia', params);

    // Sample HTTP GET request.
    // return this.get('tecnologia', params);
  }

  // Get Tecnologia
  async getEntity(id: string) {
    return KapiCrud.get('tecnologia', id);

    // Sample HTTP GET request.
    // return this.get(`tecnologia/${id}`);
  }

  // Update Tecnologia
  async updateEntity(entity) {
    return KapiCrud.update('tecnologia', entity);

    // Sample HTTP PATCH request.
    // return this.patch(tecnologia, entity);
  }

  // Auto complete for Tecnologia
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('tecnologia');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { tecnologia: { displayValue: string; value?: any } }) => ({
      ...obj.tecnologia,
    }));
  }
}
