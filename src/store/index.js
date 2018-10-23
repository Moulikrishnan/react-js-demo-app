import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import thunkMiddleware from 'redux-thunk';

export const rootStore = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  ));