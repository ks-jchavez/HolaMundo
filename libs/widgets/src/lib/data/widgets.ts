import { WidgetByIdMap } from '../types';

export const widgets: WidgetByIdMap = {
  'ea6a827b-7a6b-4ea1-a5fd-923855bbc40c': {
    actions: [],
    attributes: [
      {
        crossLinking: [],
        format: {},
        formatType: 'title',
        isFilterable: { in: false, out: false },
        label: 'Titulo',
        name: 'titulo',
        aggregation: 'selfMulti',
        id: 101800,
        statisticalType: 'Data - Categorical - free form',
        canAddValues: false,
        canEditValues: false,
      },
      {
        crossLinking: [],
        format: {},
        formatType: 'full_name',
        isFilterable: { in: false, out: false },
        label: 'Count of Actores',
        name: 'actores',
        aggregation: 'countTotal',
        id: 101801,
        statisticalType: 'Data - Categorical - free form',
        canAddValues: false,
        canEditValues: false,
      },
    ],
    chartType: `[WIDGET] BUBBLE_CHART`,
    component: undefined,
    entityId: undefined,
    id: `ea6a827b-7a6b-4ea1-a5fd-923855bbc40c`,
    params: {
      cardinality: 'SINGLE',
      groupBy: { name: 'titulo', transformation: 'selfMulti', formatType: 'title' },
      operationName: 'widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c',
      value: { name: 'actores', transformation: 'countTotal', formatType: 'full_name' },
    },
    sortOrder: 0,
    statisticalType: undefined,
    title: `Grafica de Tomatasos`,
    viableSolutions: ['[WIDGET] SINGLE_BAR_HIGHLIGHT_MAX', '[WIDGET] SIMPLE_LIST_RANKED'],
  },
};
