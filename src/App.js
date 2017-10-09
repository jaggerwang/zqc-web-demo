/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, Switch} from 'react-router'

import store from './store'
import {history} from './nav'
import * as cmp from './components'

import './App.css'

const RouteNotLogined = ({component: Component, ...rest}) =>
  <Route
    {...rest}
    render={matchProps =>
      <cmp.LayoutNotLogined>
        <Component {...matchProps} />
      </cmp.LayoutNotLogined>
    }
  />

const RouteLogined = ({component: Component, ...rest}) =>
  <Route
    {...rest}
    render={matchProps =>
      <cmp.LayoutLogined>
        <Component {...matchProps} />
      </cmp.LayoutLogined>
    }
  />

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <RouteNotLogined path='/login' component={cmp.Login} />

        <RouteLogined exact path='/' component={cmp.Home} />
        <RouteLogined path='/posts' component={cmp.Posts} />
      </Switch>
    </Router>
  </Provider>
)
