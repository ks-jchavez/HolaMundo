import { ApiTimestamp } from '../../custom/entityResolvers/api101794';
import { ApiAudio } from '../../custom/entityResolvers/api203467';
import { DataSource } from 'apollo-datasource';
import { FiltersApi } from '../../custom/filtersResolver/filtersApi';
import { FiltersFakeApi } from './filtersFakeApi';
import { WidgetApi } from './widgetApi';
import { WidgetFakeApi } from './widgetFakeApi';

export const dataSources = (): Record<string, DataSource> => ({
  filtersFakeApi: new FiltersFakeApi(),
  filtersApi: new FiltersApi(),
  widgetApi: new WidgetApi(),
  widgetFakeApi: new WidgetFakeApi(),
  api101794: new ApiTimestamp(),
  api203467: new ApiAudio(),
});
