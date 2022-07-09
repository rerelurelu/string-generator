import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { outputCard } from '../types/outputCard';

export const outputCardSlice = createSlice({
  name: 'outputCards',
  initialState: { value: [] as outputCard[] },
  reducers: {
    addOutputCard: (state: any, action: PayloadAction<outputCard>) => {
      state.value.unshift(action.payload);
    },
    deleteOutputCard: (state: any, action: PayloadAction<outputCard>) => {
      state.value = state.value.filter(
        (outputCard: outputCard) => outputCard.id !== action.payload.id
      );
    },
  },
});

export default outputCardSlice.reducer;
export const { addOutputCard, deleteOutputCard } = outputCardSlice.actions;
