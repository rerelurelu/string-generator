import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type outputCard = {
  id: string;
  digits: string;
  text: string;
};

export const outputCardSlice = createSlice({
  name: 'outputCards',
  initialState: { value: [] as outputCard[] },
  reducers: {
    addOutputCard: (state: any, action: PayloadAction<outputCard>) => {
      state.value.push(action.payload);
    },
    deleteOutputCard: (state: any, action: any) => {
      state.value = state.value.filter((outputCard: any) => outputCard.id !== action.payload.id);
    },
  },
});

export default outputCardSlice.reducer;
export const { addOutputCard, deleteOutputCard } = outputCardSlice.actions;
