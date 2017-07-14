/**
 * 在球场
 * zaiqiuchang.com
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

import * as actions from '../../actions'

class PrivateRoute extends Component {
  render () {
    let {account, component: Component, ...props} = this.props
    return (
      <Route {...props} render={props => (
        account.id
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
      )} />
    )
  }
}

function mapStateToProps (state) {
  let {account} = state
  return {
    account
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
