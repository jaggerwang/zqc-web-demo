/**
 * 在球场
 * zaiqiuchang.com
 */

import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import {DEBUG} from './config'
import reducers from './reducers'

let middlewares = [thunk]
if (DEBUG) {
  middlewares.push(createLogger({
    duration: true,
    collapsed: true
  }))
}

let enhancers = []

let composeEnhancers = compose
if (DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

let store = createStore(reducers, undefined, composeEnhancers(
  applyMiddleware(...middlewares),
  ...enhancers
))

export default store
