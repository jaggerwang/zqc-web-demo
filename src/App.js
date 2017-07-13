/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import store from './store'
import * as components from './components'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={components.Bootstrap} />
            <Route path='/login' component={components.Login} />
            <Route component={components.Layout} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
