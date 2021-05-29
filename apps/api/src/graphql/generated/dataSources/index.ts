import { ApiTimestamp } from '../../custom/entityResolvers/api101794';
import { ApiTitulo } from '../../custom/entityResolvers/api101800';
import { ApiActores } from '../../custom/entityResolvers/api101801';
import { ApiDuracion } from '../../custom/entityResolvers/api101802';
import { ApiCategoria } from '../../custom/entityResolvers/api101804';
import { ApiPuntuacion } from '../../custom/entityResolvers/api101805';
import { ApiTomatasos } from '../../custom/entityResolvers/api101806';
import { ApiCreditos } from '../../custom/entityResolvers/api102138';
import { ApiRanking } from '../../custom/entityResolvers/api102139';
import { ApiTomatasosMex } from '../../custom/entityResolvers/api113652';
import { ApiTomatasosEu } from '../../custom/entityResolvers/api113653';
import { ApiLaVeoONoLaVeo } from '../../custom/entityResolvers/api113734';
import { ApiIkea } from '../../custom/entityResolvers/api122586';
import { ApiCocina } from '../../custom/entityResolvers/api122587';
import { ApiRecamara } from '../../custom/entityResolvers/api122588';
import { ApiJardin } from '../../custom/entityResolvers/api122589';
import { ApiSala } from '../../custom/entityResolvers/api122590';
import { FiltersApi } from '../../custom/filtersResolver/filtersApi';
import { FiltersFakeApi } from './filtersFakeApi';
import { WidgetApi } from './widgetApi';
import { WidgetFakeApi } from './widgetFakeApi';

export const dataSources = () => ({
  filtersFakeApi: new FiltersFakeApi(),
  filtersApi: new FiltersApi(),
  widgetApi: new WidgetApi(),
  widgetFakeApi: new WidgetFakeApi(),
  api101794: new ApiTimestamp(),
  api101800: new ApiTitulo(),
  api101801: new ApiActores(),
  api101802: new ApiDuracion(),
  api101804: new ApiCategoria(),
  api101805: new ApiPuntuacion(),
  api101806: new ApiTomatasos(),
  api102138: new ApiCreditos(),
  api102139: new ApiRanking(),
  api113652: new ApiTomatasosMex(),
  api113653: new ApiTomatasosEu(),
  api113734: new ApiLaVeoONoLaVeo(),
  api122586: new ApiIkea(),
  api122587: new ApiCocina(),
  api122588: new ApiRecamara(),
  api122589: new ApiJardin(),
  api122590: new ApiSala(),
});
