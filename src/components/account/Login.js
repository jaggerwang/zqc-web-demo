/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../../actions'
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
          let {from} = location.state || {}
          history.push(from || {pathname: '/'})
        }
      })
  }

  render () {
    return (
      <LoginForm onSubmit={values => this.submit(values)} />
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
