import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiSala extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://put.your.api.here/';
    // If you need to access the current user, the token and data sources,
    // you can get them from 'this.context'
  }

  willSendRequest(request: RequestOptions) {
    // Use this line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Use this line to set a params token.
    // request.params.set('api_key', this.context.token);
  }

  // add Sala
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('sala', entity);

    // an example making an HTTP POST request.
    // return this.post('sala', entity);
  }

  // delete Sala
  async deleteEntity(id: string) {
    return KapiCrud.delete('sala', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`sala/${id}`);
  }

  // list Sala
  async listEntity(params: any) {
    return KapiCrud.list('sala', params);

    // an example making an HTTP GET request.
    // return this.get('sala', params);
  }

  // get Sala
  async getEntity(id: string) {
    return KapiCrud.get('sala', id);

    // an example making an HTTP GET request.
    // return this.get(`sala/${id}`);
  }

  // update Sala
  async updateEntity(entity) {
    return KapiCrud.update('sala', entity);

    // an example making an HTTP PATH request.
    // return this.patch(sala, entity);
  }

  // auto complete for Sala
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('sala');

    return results.map((obj: { sala: { displayValue: string; value?: any } }) => ({ ...obj.sala }));
  }
}
