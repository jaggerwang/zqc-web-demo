/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import * as cmp from './components'

export default () => (
  <Router>
    <Switch>
      <Route path='/login' component={cmp.Login} />
      <cmp.PrivateRoute exact path='/' component={cmp.Home} />
      <cmp.PrivateRoute path='/posts' component={cmp.Posts} />
    </Switch>
  </Router>
)
