export const dataViewDisplaySectionAtomicDashboardWidgets = [
  {
    actions: [],
    addModalAttributes: [],
    attributes: [
      {
        crossLinking: [],
        format: {
          min: null,
          max: null,
          prefix: null,
          suffix: null,
          aggregations: null,
          examples: null,
          severityBad: null,
          severityGood: null,
          severityLevels: null,
        },
        formatType: 'title',
        isFilterable: { in: false, out: false },
        label: 'Titulo',
        name: 'titulo',
        aggregation: 'selfMulti',
        id: 101800,
        statisticalType: 'Data - Categorical - free form',
      },
      {
        crossLinking: [],
        format: {
          min: null,
          max: null,
          prefix: null,
          suffix: null,
          aggregations: null,
          examples: null,
          severityBad: null,
          severityGood: null,
          severityLevels: null,
        },
        formatType: 'full_name',
        isFilterable: { in: false, out: false },
        label: 'Count of Actores',
        name: 'actores',
        aggregation: 'countTotal',
        id: 101801,
        statisticalType: 'Data - Categorical - free form',
      },
    ],
    chartType: `[WIDGET] BUBBLE_CHART`,
    component: undefined,
    description: undefined,
    id: `ea6a827b-7a6b-4ea1-a5fd-923855bbc40c`,
    params: {
      cardinality: 'SINGLE',
      groupBy: { name: 'titulo', transformation: 'selfMulti', formatType: 'title' },
      operationName: 'widget_ea6a827b_7a6b_4ea1_a5fd_923855bbc40c',
      taskName: 'Graficas',
      value: { name: 'actores', transformation: 'countTotal', formatType: 'full_name' },
    },
    statisticalType: undefined,
    title: `Grafica de Tomatasos`,
    viableSolutions: ['[WIDGET] SINGLE_BAR_HIGHLIGHT_MAX', '[WIDGET] SIMPLE_LIST_RANKED'],
    viewId: 'ks-view-9oj7frF23EJfvfbwfAxkhx',
  },
];
