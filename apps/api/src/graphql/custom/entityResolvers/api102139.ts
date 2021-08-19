import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRanking extends RESTDataSource {
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

  // Add Ranking
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ranking', entity);

    // Sample HTTP POST request.
    // return this.post('ranking', entity);
  }

  // Delete Ranking
  async deleteEntity(id: string) {
    return KapiCrud.delete('ranking', id);

    // Sample HTTP DELETE request.
    // return this.delete(`ranking/${id}`);
  }

  // List Ranking
  async listEntity(params: any) {
    return KapiCrud.list('ranking', params);

    // Sample HTTP GET request.
    // return this.get('ranking', params);
  }

  // Get Ranking
  async getEntity(id: string) {
    return KapiCrud.get('ranking', id);

    // Sample HTTP GET request.
    // return this.get(`ranking/${id}`);
  }

  // Update Ranking
  async updateEntity(entity) {
    return KapiCrud.update('ranking', entity);

    // Sample HTTP PATCH request.
    // return this.patch(ranking, entity);
  }

  // Auto complete for Ranking
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ranking');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { ranking: { displayValue: string; value?: any } }) => ({ ...obj.ranking }));
  }
}
