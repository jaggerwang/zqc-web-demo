/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as rs from 'reactstrap'
import {reduxForm, Field} from 'redux-form'

import * as actions from '../../actions'
import * as cmp from '../'

import './Login.css'

class Login extends Component {
  constructor (props) {
    super(props)

    this.screenId = props.screenId || 'Login'
  }

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
      password,
      cbOk: user => {
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

const LoginForm = reduxForm({
  form: 'loginForm'
})(props => {
  const {handleSubmit, pristine, submitting, reset} = props

  return (
    <rs.Form id='login-form' className='m-5' onSubmit={handleSubmit}>
      <rs.FormGroup row>
        <rs.Label htmlFor='account' sm={3}>帐号：</rs.Label>
        <rs.Col sm={9}>
          <Field
            id='account'
            name='account'
            component={cmp.TextField}
            type='text'
            placeholder='请输入手机号或绑定邮箱'
          />
        </rs.Col>
      </rs.FormGroup>
      <rs.FormGroup row>
        <rs.Label htmlFor='password' sm={3}>密码：</rs.Label>
        <rs.Col sm={9}>
          <Field
            id='password'
            name='password'
            component={cmp.TextField}
            type='password'
            placeholder='请输入密码'
          />
        </rs.Col>
      </rs.FormGroup>
      <rs.FormGroup row>
        <rs.Col sm={{size: 9, offset: 3}}>
          <rs.Button type='submit' disabled={pristine || submitting} color='primary'>登录</rs.Button>
          <rs.Button type='reset' disabled={pristine || submitting} onClick={reset} className='ml-3'>重置</rs.Button>
        </rs.Col>
      </rs.FormGroup>
    </rs.Form>
  )
})

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
