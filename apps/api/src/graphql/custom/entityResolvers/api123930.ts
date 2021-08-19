import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiMixup extends RESTDataSource {
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

  // Add Mixup
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('mixup', entity);

    // Sample HTTP POST request.
    // return this.post('mixup', entity);
  }

  // Delete Mixup
  async deleteEntity(id: string) {
    return KapiCrud.delete('mixup', id);

    // Sample HTTP DELETE request.
    // return this.delete(`mixup/${id}`);
  }

  // List Mixup
  async listEntity(params: any) {
    return KapiCrud.list('mixup', params);

    // Sample HTTP GET request.
    // return this.get('mixup', params);
  }

  // Get Mixup
  async getEntity(id: string) {
    return KapiCrud.get('mixup', id);

    // Sample HTTP GET request.
    // return this.get(`mixup/${id}`);
  }

  // Update Mixup
  async updateEntity(entity) {
    return KapiCrud.update('mixup', entity);

    // Sample HTTP PATCH request.
    // return this.patch(mixup, entity);
  }

  // Auto complete for Mixup
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('mixup');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { mixup: { displayValue: string; value?: any } }) => ({ ...obj.mixup }));
  }
}
