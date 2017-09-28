/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import store from './store'
import * as cmp from './components'

import './App.css'

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={cmp.Home} />
        <Route path='/login' component={cmp.Login} />
        <Route path='/posts' component={cmp.Posts} />
      </Switch>
    </Router>
  </Provider>
)
