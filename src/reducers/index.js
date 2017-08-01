/**
 * 在球场
 * zaiqiuchang.com
 */

import {combineReducers} from 'redux'
import store from './store'
import error from './error'
import loading from './loading'
import {reducer as form} from 'redux-form'
import screen from './screen'
import object from './object'
import account from './account'
import post from './post'

export default combineReducers({
  store,
  error,
  loading,
  form,
  screen,
  object,
  account,
  post
})
