import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiLaVeoONoLaVeo extends RESTDataSource {
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

  // Add LaVeoONoLaVeo
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('laVeoONoLaVeo', entity);

    // Sample HTTP POST request.
    // return this.post('laVeoONoLaVeo', entity);
  }

  // Delete LaVeoONoLaVeo
  async deleteEntity(id: string) {
    return KapiCrud.delete('laVeoONoLaVeo', id);

    // Sample HTTP DELETE request.
    // return this.delete(`laVeoONoLaVeo/${id}`);
  }

  // List LaVeoONoLaVeo
  async listEntity(params: any) {
    return KapiCrud.list('laVeoONoLaVeo', params);

    // Sample HTTP GET request.
    // return this.get('laVeoONoLaVeo', params);
  }

  // Get LaVeoONoLaVeo
  async getEntity(id: string) {
    return KapiCrud.get('laVeoONoLaVeo', id);

    // Sample HTTP GET request.
    // return this.get(`laVeoONoLaVeo/${id}`);
  }

  // Update LaVeoONoLaVeo
  async updateEntity(entity) {
    return KapiCrud.update('laVeoONoLaVeo', entity);

    // Sample HTTP PATCH request.
    // return this.patch(laVeoONoLaVeo, entity);
  }

  // Auto complete for LaVeoONoLaVeo
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('laVeoONoLaVeo');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { laVeoONoLaVeo: { displayValue: string; value?: any } }) => ({
      ...obj.laVeoONoLaVeo,
    }));
  }
}
