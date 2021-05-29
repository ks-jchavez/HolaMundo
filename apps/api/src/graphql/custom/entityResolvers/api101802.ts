import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiDuracion extends RESTDataSource {
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

  // add Duracion
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('duracion', entity);

    // an example making an HTTP POST request.
    // return this.post('duracion', entity);
  }

  // delete Duracion
  async deleteEntity(id: string) {
    return KapiCrud.delete('duracion', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`duracion/${id}`);
  }

  // list Duracion
  async listEntity(params: any) {
    return KapiCrud.list('duracion', params);

    // an example making an HTTP GET request.
    // return this.get('duracion', params);
  }

  // get Duracion
  async getEntity(id: string) {
    return KapiCrud.get('duracion', id);

    // an example making an HTTP GET request.
    // return this.get(`duracion/${id}`);
  }

  // update Duracion
  async updateEntity(entity) {
    return KapiCrud.update('duracion', entity);

    // an example making an HTTP PATH request.
    // return this.patch(duracion, entity);
  }

  // auto complete for Duracion
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('duracion');

    return results.map((obj: { duracion: { displayValue: string; value?: any } }) => ({ ...obj.duracion }));
  }
}
