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
import { ApiMixup } from '../../custom/entityResolvers/api123930';
import { ApiTecnologia } from '../../custom/entityResolvers/api123932';
import { ApiAccesorios } from '../../custom/entityResolvers/api123933';
import { ApiBocinas } from '../../custom/entityResolvers/api123934';
import { ApiVideoGames } from '../../custom/entityResolvers/api123935';
import { ApiSmartHome } from '../../custom/entityResolvers/api123936';
import { ApiLiverpool } from '../../custom/entityResolvers/api148231';
import { ApiMascotas } from '../../custom/entityResolvers/api148232';
import { ApiRelojes } from '../../custom/entityResolvers/api148233';
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
  api123930: new ApiMixup(),
  api123932: new ApiTecnologia(),
  api123933: new ApiAccesorios(),
  api123934: new ApiBocinas(),
  api123935: new ApiVideoGames(),
  api123936: new ApiSmartHome(),
  api148231: new ApiLiverpool(),
  api148232: new ApiMascotas(),
  api148233: new ApiRelojes(),
});
