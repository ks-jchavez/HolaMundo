import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiJardin extends RESTDataSource {
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

  // add Jardin
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('jardin', entity);

    // an example making an HTTP POST request.
    // return this.post('jardin', entity);
  }

  // delete Jardin
  async deleteEntity(id: string) {
    return KapiCrud.delete('jardin', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`jardin/${id}`);
  }

  // list Jardin
  async listEntity(params: any) {
    return KapiCrud.list('jardin', params);

    // an example making an HTTP GET request.
    // return this.get('jardin', params);
  }

  // get Jardin
  async getEntity(id: string) {
    return KapiCrud.get('jardin', id);

    // an example making an HTTP GET request.
    // return this.get(`jardin/${id}`);
  }

  // update Jardin
  async updateEntity(entity) {
    return KapiCrud.update('jardin', entity);

    // an example making an HTTP PATH request.
    // return this.patch(jardin, entity);
  }

  // auto complete for Jardin
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('jardin');

    return results.map((obj: { jardin: { displayValue: string; value?: any } }) => ({ ...obj.jardin }));
  }
}
