import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSmartHome extends RESTDataSource {
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

  // Add SmartHome
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('smartHome', entity);

    // Sample HTTP POST request.
    // return this.post('smartHome', entity);
  }

  // Delete SmartHome
  async deleteEntity(id: string) {
    return KapiCrud.delete('smartHome', id);

    // Sample HTTP DELETE request.
    // return this.delete(`smartHome/${id}`);
  }

  // List SmartHome
  async listEntity(params: any) {
    return KapiCrud.list('smartHome', params);

    // Sample HTTP GET request.
    // return this.get('smartHome', params);
  }

  // Get SmartHome
  async getEntity(id: string) {
    return KapiCrud.get('smartHome', id);

    // Sample HTTP GET request.
    // return this.get(`smartHome/${id}`);
  }

  // Update SmartHome
  async updateEntity(entity) {
    return KapiCrud.update('smartHome', entity);

    // Sample HTTP PATCH request.
    // return this.patch(smartHome, entity);
  }

  // Auto complete for SmartHome
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('smartHome');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { smartHome: { displayValue: string; value?: any } }) => ({ ...obj.smartHome }));
  }
}
