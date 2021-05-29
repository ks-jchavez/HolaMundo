import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiTomatasosEu extends RESTDataSource {
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

  // add TomatasosEu
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('tomatasosEu', entity);

    // an example making an HTTP POST request.
    // return this.post('tomatasosEu', entity);
  }

  // delete TomatasosEu
  async deleteEntity(id: string) {
    return KapiCrud.delete('tomatasosEu', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`tomatasosEu/${id}`);
  }

  // list TomatasosEu
  async listEntity(params: any) {
    return KapiCrud.list('tomatasosEu', params);

    // an example making an HTTP GET request.
    // return this.get('tomatasosEu', params);
  }

  // get TomatasosEu
  async getEntity(id: string) {
    return KapiCrud.get('tomatasosEu', id);

    // an example making an HTTP GET request.
    // return this.get(`tomatasosEu/${id}`);
  }

  // update TomatasosEu
  async updateEntity(entity) {
    return KapiCrud.update('tomatasosEu', entity);

    // an example making an HTTP PATH request.
    // return this.patch(tomatasosEu, entity);
  }

  // auto complete for TomatasosEu
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('tomatasosEu');

    return results.map((obj: { tomatasosEu: { displayValue: string; value?: any } }) => ({
      ...obj.tomatasosEu,
    }));
  }
}
