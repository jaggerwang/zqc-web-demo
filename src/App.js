/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import store from './store'
import * as cmp from './components'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/login' component={cmp.Login} />
            <cmp.PrivateRoute exact path='/' component={cmp.Home} />
            <cmp.PrivateRoute path='/posts' component={cmp.Posts} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
