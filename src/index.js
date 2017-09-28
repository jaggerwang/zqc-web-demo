import React from 'react'
import ReactDOM from 'react-dom'
import compareVersions from 'compare-versions'

import {VERSION} from './config'
import logger from './logger'
import store, {persistStore} from './store'
import * as actions from './actions'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'

persistStore(
  store,
  state => {
    logger.info('load state ok', state)

    let {dispatch, getState} = store

    let {version} = state.store || {}
    if (version === undefined || compareVersions(version, VERSION) !== 0) {
      dispatch(actions.reset())
      dispatch(actions.setStoreVersion(VERSION))
      state = getState()
    }
    logger.info('check store version ok')

    let {id} = state.account || {}
    if (id === '' && window.location.pathname !== '/login') {
      window.location.href = '/login'
      return
    }

    ReactDOM.render(<App />, document.getElementById('root'))
  },
  error => {
    logger.error('load state failed', error)
  }
)
