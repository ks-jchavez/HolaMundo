import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiIkea extends RESTDataSource {
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

  // add Ikea
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ikea', entity);

    // an example making an HTTP POST request.
    // return this.post('ikea', entity);
  }

  // delete Ikea
  async deleteEntity(id: string) {
    return KapiCrud.delete('ikea', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`ikea/${id}`);
  }

  // list Ikea
  async listEntity(params: any) {
    return KapiCrud.list('ikea', params);

    // an example making an HTTP GET request.
    // return this.get('ikea', params);
  }

  // get Ikea
  async getEntity(id: string) {
    return KapiCrud.get('ikea', id);

    // an example making an HTTP GET request.
    // return this.get(`ikea/${id}`);
  }

  // update Ikea
  async updateEntity(entity) {
    return KapiCrud.update('ikea', entity);

    // an example making an HTTP PATH request.
    // return this.patch(ikea, entity);
  }

  // auto complete for Ikea
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ikea');

    return results.map((obj: { ikea: { displayValue: string; value?: any } }) => ({ ...obj.ikea }));
  }
}
