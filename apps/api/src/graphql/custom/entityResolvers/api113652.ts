import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiTomatasosMex extends RESTDataSource {
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

  // Add TomatasosMex
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('tomatasosMex', entity);

    // Sample HTTP POST request.
    // return this.post('tomatasosMex', entity);
  }

  // Delete TomatasosMex
  async deleteEntity(id: string) {
    return KapiCrud.delete('tomatasosMex', id);

    // Sample HTTP DELETE request.
    // return this.delete(`tomatasosMex/${id}`);
  }

  // List TomatasosMex
  async listEntity(params: any) {
    return KapiCrud.list('tomatasosMex', params);

    // Sample HTTP GET request.
    // return this.get('tomatasosMex', params);
  }

  // Get TomatasosMex
  async getEntity(id: string) {
    return KapiCrud.get('tomatasosMex', id);

    // Sample HTTP GET request.
    // return this.get(`tomatasosMex/${id}`);
  }

  // Update TomatasosMex
  async updateEntity(entity) {
    return KapiCrud.update('tomatasosMex', entity);

    // Sample HTTP PATCH request.
    // return this.patch(tomatasosMex, entity);
  }

  // Auto complete for TomatasosMex
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('tomatasosMex');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { tomatasosMex: { displayValue: string; value?: any } }) => ({
      ...obj.tomatasosMex,
    }));
  }
}
