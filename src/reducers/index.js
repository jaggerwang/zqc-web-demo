/**
 * 在球场
 * zaiqiuchang.com
 */

import {combineReducers} from 'redux'
import store from './store'
import layout from './layout'
import error from './error'
import loading from './loading'
import input from './input'
import screen from './screen'
import object from './object'
import account from './account'

export default combineReducers({
  store,
  layout,
  error,
  loading,
  input,
  screen,
  object,
  account
})
