/**
 * 在球场
 * zaiqiuchang.com
 */

import {routerReducer as router} from 'react-router-redux'
import {reducer as form} from 'redux-form'

import {combineReducers} from 'redux'
import store from './store'
import error from './error'
import loading from './loading'
import screen from './screen'
import object from './object'
import account from './account'
import post from './post'

export default combineReducers({
  router,
  form,
  store,
  error,
  loading,
  screen,
  object,
  account,
  post
})
