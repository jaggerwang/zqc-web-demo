/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../../actions'
import * as cmp from '../'
import LoginForm from './LoginForm'

class Login extends Component {
  submit (values) {
    let {location, history, login} = this.props
    let {account, password} = values

    let username, mobile, email
    if (account.match(/^\d+$/) !== null) {
      mobile = account
    } else if (account.match(/^.+@.+$/) !== null) {
      email = account
    } else {
      username = account
    }
    login({
      username,
      mobile,
      email,
      password
    })
      .then(user => {
        if (user) {
          let {from} = location.state || {from: {pathname: '/'}}
          history.replace(from)
        }
      })
  }

  render () {
    return (
      <cmp.LayoutNoLogin>
        <LoginForm onSubmit={values => this.submit(values)} />
      </cmp.LayoutNoLogin>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
