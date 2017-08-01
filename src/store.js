/**
 * 在球场
 * zaiqiuchang.com
 */

import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {persistStore as reduxPersistStore, autoRehydrate} from 'redux-persist'

import {DEBUG} from './config'
import reducers from './reducers'

let middlewares = [thunk]
if (DEBUG) {
  middlewares.push(createLogger({
    duration: true,
    collapsed: true
  }))
}

let composeEnhancers = compose
if (DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

let store = createStore(reducers, undefined, composeEnhancers(
  applyMiddleware(...middlewares),
  autoRehydrate()
))

export function persistStore (store, cbOk, cbFail) {
  reduxPersistStore(
    store,
    {
      blacklist: ['loading', 'processing', 'error']
    },
    (error, state) => {
      if (error) {
        cbFail(error)
      } else {
        cbOk(state)
      }
    }
  )
}

export default store
