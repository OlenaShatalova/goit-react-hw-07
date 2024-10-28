import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions; // {type: filters/changeFilter, payload: "new (state.name)"}

export const selectNameFilter = state => state.filters.name;