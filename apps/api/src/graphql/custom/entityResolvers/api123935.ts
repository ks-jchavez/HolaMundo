import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiVideoGames extends RESTDataSource {
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

  // Add VideoGames
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('videoGames', entity);

    // Sample HTTP POST request.
    // return this.post('videoGames', entity);
  }

  // Delete VideoGames
  async deleteEntity(id: string) {
    return KapiCrud.delete('videoGames', id);

    // Sample HTTP DELETE request.
    // return this.delete(`videoGames/${id}`);
  }

  // List VideoGames
  async listEntity(params: any) {
    return KapiCrud.list('videoGames', params);

    // Sample HTTP GET request.
    // return this.get('videoGames', params);
  }

  // Get VideoGames
  async getEntity(id: string) {
    return KapiCrud.get('videoGames', id);

    // Sample HTTP GET request.
    // return this.get(`videoGames/${id}`);
  }

  // Update VideoGames
  async updateEntity(entity) {
    return KapiCrud.update('videoGames', entity);

    // Sample HTTP PATCH request.
    // return this.patch(videoGames, entity);
  }

  // Auto complete for VideoGames
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('videoGames');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { videoGames: { displayValue: string; value?: any } }) => ({
      ...obj.videoGames,
    }));
  }
}
