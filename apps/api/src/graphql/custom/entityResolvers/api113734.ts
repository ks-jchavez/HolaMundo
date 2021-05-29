import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiLaVeoONoLaVeo extends RESTDataSource {
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

  // add LaVeoONoLaVeo
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('laVeoONoLaVeo', entity);

    // an example making an HTTP POST request.
    // return this.post('laVeoONoLaVeo', entity);
  }

  // delete LaVeoONoLaVeo
  async deleteEntity(id: string) {
    return KapiCrud.delete('laVeoONoLaVeo', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`laVeoONoLaVeo/${id}`);
  }

  // list LaVeoONoLaVeo
  async listEntity(params: any) {
    return KapiCrud.list('laVeoONoLaVeo', params);

    // an example making an HTTP GET request.
    // return this.get('laVeoONoLaVeo', params);
  }

  // get LaVeoONoLaVeo
  async getEntity(id: string) {
    return KapiCrud.get('laVeoONoLaVeo', id);

    // an example making an HTTP GET request.
    // return this.get(`laVeoONoLaVeo/${id}`);
  }

  // update LaVeoONoLaVeo
  async updateEntity(entity) {
    return KapiCrud.update('laVeoONoLaVeo', entity);

    // an example making an HTTP PATH request.
    // return this.patch(laVeoONoLaVeo, entity);
  }

  // auto complete for LaVeoONoLaVeo
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('laVeoONoLaVeo');

    return results.map((obj: { laVeoONoLaVeo: { displayValue: string; value?: any } }) => ({
      ...obj.laVeoONoLaVeo,
    }));
  }
}
