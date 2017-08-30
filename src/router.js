/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import * as cmp from './components'

export const history = createHistory()

export default () => (
  <Router>
    <Switch>
      <Route path='/login' component={cmp.Login} />
      <cmp.PrivateRoute exact path='/' component={cmp.Home} />
      <cmp.PrivateRoute path='/posts' component={cmp.Posts} />
    </Switch>
  </Router>
)
