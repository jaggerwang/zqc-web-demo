/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import {Provider} from 'react-redux'

import store from './store'
import Router from './router'

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
