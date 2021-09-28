import { WidgetState, WidgetStateParamsGroupBy } from '@kleeen/types';

import { PayloadAction } from '@reduxjs/toolkit';
import { WidgetActions } from '../../types/actions';

interface WidgetModel {
  initialState: WidgetState;
  reducers: Record<string, (state: WidgetState, action?: PayloadAction | any) => void>;
}

export const initialState: WidgetState = {
  data: {},
  error: null,
  params: {},
  isLoading: false,
};

export const model: WidgetModel = {
  initialState,
  reducers: {
    /**
     * Get Widget Data
     */

    getData(state: WidgetState): void {
      state.isLoading = true;
      state.error = null;
    },
    getDataSuccess(state: WidgetState, { payload }: WidgetActions.GetDataSuccess): void {
      const { response } = payload;
      state.data = response;
      state.isLoading = false;
      state.error = null;
    },
    getDataFailure(state: WidgetState, { payload }: WidgetActions.GetDataFailure): void {
      const { response } = payload;
      state.error = response;
      state.isLoading = false;
    },

    getMoreData(state: WidgetState): void {
      state.isLoading = false;
      state.error = null;
    },
    getMoreDataSuccess(state: WidgetState, { payload }: WidgetActions.GetDataSuccess): void {
      const { response } = payload;
      const newData = {
        ...response,
        data: [...state.data.data, ...response.data],
      };
      state.data = newData;
      state.isLoading = false;
      state.error = null;
    },
    getMoreDataFailure(state: WidgetState, { payload }: WidgetActions.GetDataFailure): void {
      const { response } = payload;
      state.error = response;
      state.isLoading = false;
    },

    getGroupBy(state: WidgetState) {
      return state.params.groupBy;
    },
    setGroupBy(state: WidgetState, { payload }: PayloadAction<WidgetStateParamsGroupBy>): void {
      state.params.groupBy = payload;
    },
  },
};
