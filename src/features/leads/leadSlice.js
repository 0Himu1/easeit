import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = leadsSlice.actions;
export default leadsSlice.reducer;
