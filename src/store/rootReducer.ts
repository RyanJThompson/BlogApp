// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import blogReducer from './blog/blogSlice';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
  blog: blogReducer,
  auth: authReducer,
});

export default rootReducer;
