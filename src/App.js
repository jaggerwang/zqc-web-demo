/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'

import {THEME} from './config'
import store from './store'
import Router from './router'

import './App.css'

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <Router />
    </ThemeProvider>
  </Provider>
)
