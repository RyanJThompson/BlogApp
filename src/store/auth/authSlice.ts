// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Draft } from 'immer';

interface DataItemEmail {
  email: string;
}

const initialState: DataItemEmail = {
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeEmail: (state: Draft<DataItemEmail>, action: PayloadAction<DataItemEmail>) => {
      return action.payload;
    },
  },
});

export const { storeEmail } = authSlice.actions;
export default authSlice.reducer;
