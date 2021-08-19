import { createSlice } from '@reduxjs/toolkit';
import task from './models';

const entityName = 'graficas';
const taskSlice = createSlice({
  name: entityName,
  ...task,
});

const actions = { key: entityName, actions: taskSlice.actions };

export { actions };

export default taskSlice.reducer;
