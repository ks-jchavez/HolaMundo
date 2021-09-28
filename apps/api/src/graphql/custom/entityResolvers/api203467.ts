import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAudio extends RESTDataSource {
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

  // Add Audio
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('audio', entity);

    // Sample HTTP POST request.
    // return this.post('audio', entity);
  }

  // Delete Audio
  async deleteEntity(id: string) {
    return KapiCrud.delete('audio', id);

    // Sample HTTP DELETE request.
    // return this.delete(`audio/${id}`);
  }

  // List Audio
  async listEntity(params: any) {
    return KapiCrud.list('audio', params);

    // Sample HTTP GET request.
    // return this.get('audio', params);
  }

  // Get Audio
  async getEntity(id: string) {
    return KapiCrud.get('audio', id);

    // Sample HTTP GET request.
    // return this.get(`audio/${id}`);
  }

  // Update Audio
  async updateEntity(entity) {
    return KapiCrud.update('audio', entity);

    // Sample HTTP PATCH request.
    // return this.patch(audio, entity);
  }

  // Auto complete for Audio
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('audio');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { audio: { displayValue: string; value?: any } }) => ({ ...obj.audio }));
  }
}
