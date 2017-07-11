/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'
import * as components from './components'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={components.Bootstrap} />
            <Route path='/login' component={components.Login} />
            <Route path='/posts' component={components.PostList} />
          </div>
        </Router>
      </Provider>
    )
  }
}
