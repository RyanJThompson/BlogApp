// blogSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageURISource } from 'react-native';
import { Draft } from 'immer';

interface DataItem {
  id: number;
  title: string;
  description: string;
  image: ImageURISource;
  author: string;
}

const initialState: DataItem[] = [];

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    storeBlogs: (state: Draft<DataItem[]>, action: PayloadAction<DataItem[]>) => {
      return action.payload;
    },
  },
});

export const { storeBlogs } = blogSlice.actions;
export default blogSlice.reducer;
