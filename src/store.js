/**
 * 在球场
 * zaiqiuchang.com
 */

import {applyMiddleware, compose, createStore as createReduxStore} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {browserHistory} from 'react-router';

import {changeLocation} from './actions';
import reducers from './reducers';

let store;

export function createStore(initialState = {}) {
  let middlewares = [thunk];
  if (__DEV__) {
    middlewares.push(createLogger({
      duration: true,
      collapsed: true,
    }));
  }

  let enhancers = [];

  let composeEnhancers = compose;
  if (__DEV__) {
    let composeWithDevToolsExtension = 
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  let store = createReduxStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );
  store.asyncReducers = {};

  store.unsubscribeHistory = browserHistory.listen(nextLocation => 
    store.dispatch(changeLocation(nextLocation))
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      let {makeRootReducer} = require('./reducers');
      store.replaceReducer(makeRootReducer(store.asyncReducers));
    });
  }

  return store;
};

export function getStore() {
  if (!store) {
    store = createStore(window.___INITIAL_STATE__);
  }
  return store;
}
