// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import blogReducer from './blog/blogSlice';

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
