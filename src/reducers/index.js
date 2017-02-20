/**
 * 在球场
 * zaiqiuchang.com
 */

import {combineReducers} from 'redux';
import store from './store';
import location from './location';
import layout from './layout';
import error from './error';
import loading from './loading';
import input from './input';
import screen from './screen';
import object from './object';
import account from './account';

const reducers = {
  store,
  location,
  layout,
  error,
  loading,
  input,
  screen,
  object,
  account,
};

export function makeRootReducer(asyncReducers = {}) {
  return combineReducers({
    ...reducers,
    ...asyncReducers,
  });
}

export function injectReducer(store, {key, reducer}) {
  if (!store.asyncReducers.hasOwnProperty(key)) {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
  }
}

export default makeRootReducer();
