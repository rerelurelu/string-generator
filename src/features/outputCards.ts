import { createSlice } from '@reduxjs/toolkit';

export const outputCardSlice = createSlice({
  name: 'outputCards',
  initialState: { value: [] },
  reducers: {
    addOutputCard: (state: any, action: any) => {
      state.value.push(action.payload);
    },
  },
});

export default outputCardSlice.reducer;
export const { addOutputCard } = outputCardSlice.actions;
