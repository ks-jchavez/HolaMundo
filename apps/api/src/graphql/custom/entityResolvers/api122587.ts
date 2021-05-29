import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiCocina extends RESTDataSource {
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

  // add Cocina
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('cocina', entity);

    // an example making an HTTP POST request.
    // return this.post('cocina', entity);
  }

  // delete Cocina
  async deleteEntity(id: string) {
    return KapiCrud.delete('cocina', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`cocina/${id}`);
  }

  // list Cocina
  async listEntity(params: any) {
    return KapiCrud.list('cocina', params);

    // an example making an HTTP GET request.
    // return this.get('cocina', params);
  }

  // get Cocina
  async getEntity(id: string) {
    return KapiCrud.get('cocina', id);

    // an example making an HTTP GET request.
    // return this.get(`cocina/${id}`);
  }

  // update Cocina
  async updateEntity(entity) {
    return KapiCrud.update('cocina', entity);

    // an example making an HTTP PATH request.
    // return this.patch(cocina, entity);
  }

  // auto complete for Cocina
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('cocina');

    return results.map((obj: { cocina: { displayValue: string; value?: any } }) => ({ ...obj.cocina }));
  }
}
