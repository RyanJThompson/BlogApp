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
    setBlogs: (state: Draft<DataItem[]>, action: PayloadAction<DataItem[]>) => {
      return action.payload;
    },
  },
});

export const { setBlogs } = blogSlice.actions;
export type BlogState = DataItem[];
export default blogSlice.reducer;
