import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiRecamara extends RESTDataSource {
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

  // add Recamara
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('recamara', entity);

    // an example making an HTTP POST request.
    // return this.post('recamara', entity);
  }

  // delete Recamara
  async deleteEntity(id: string) {
    return KapiCrud.delete('recamara', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`recamara/${id}`);
  }

  // list Recamara
  async listEntity(params: any) {
    return KapiCrud.list('recamara', params);

    // an example making an HTTP GET request.
    // return this.get('recamara', params);
  }

  // get Recamara
  async getEntity(id: string) {
    return KapiCrud.get('recamara', id);

    // an example making an HTTP GET request.
    // return this.get(`recamara/${id}`);
  }

  // update Recamara
  async updateEntity(entity) {
    return KapiCrud.update('recamara', entity);

    // an example making an HTTP PATH request.
    // return this.patch(recamara, entity);
  }

  // auto complete for Recamara
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('recamara');

    return results.map((obj: { recamara: { displayValue: string; value?: any } }) => ({ ...obj.recamara }));
  }
}
