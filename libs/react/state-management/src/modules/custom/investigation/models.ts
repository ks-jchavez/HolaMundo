import { AddWidget, InitializeWidgets } from '../../../types/actions/investigation';

import { InvestigationState } from '../../../types/state';

const initialState: InvestigationState = {
  investigationWidgets: [],
};

const Investigation = {
  initialState,
  reducers: {
    addWidget: (state: InvestigationState, { payload: newInvestigationWidget }: AddWidget) => {
      state.investigationWidgets = [newInvestigationWidget, ...state.investigationWidgets];
    },

    clearInvestigation(state: InvestigationState): void {
      state.investigationWidgets = [];
    },

    initializeWidgets: (state: InvestigationState, { payload }: InitializeWidgets) => {
      state.investigationWidgets = [...payload];
    },
  },
};

export default Investigation;
