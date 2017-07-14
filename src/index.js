import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import store from './store'
import * as components from './components'

import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={components.App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
