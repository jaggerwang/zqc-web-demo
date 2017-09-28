/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {THEME} from './config'
import store from './store'
import * as cmp from './components'

import './App.css'

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <Router>
        <Switch>
          <Route exact path='/' component={cmp.Home} />
          <Route path='/login' component={cmp.Login} />
          <Route path='/posts' component={cmp.Posts} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
)
