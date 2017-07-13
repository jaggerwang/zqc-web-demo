/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as rs from 'reactstrap'

import * as actions from '../../actions'
import * as helpers from '../../helpers'

class Login extends Component {
  constructor (props) {
    super(props)

    this.screenId = props.screenId || 'Login'
  }

  submit (event) {
    let {history, input, validateInput, setScreenState, login} = this.props

    setScreenState(this.screenId, {isSubmitted: true})

    validateInput(this.screenId, input[this.screenId], () => {
      let {account, password} = input[this.screenId]
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
        cbOk: user => history.push('/')
      })
    })

    event.preventDefault()
  }

  render () {
    let {error, input, screen, saveInput, resetInput} = this.props
    let errorInput = error.input[this.screenId] || {}
    let {account, password} = input[this.screenId]
    let {isSubmitted} = screen[this.screenId]

    return (
      <rs.Form className='m-5'>
        <rs.FormGroup row
          color={helpers.inputState(errorInput.account, isSubmitted)}>
          <rs.Label htmlFor='account' sm={2}>帐号</rs.Label>
          <rs.Col sm={10}>
            <rs.Input type='text' name='account' id='account'
              placeholder='请输入手机号或绑定邮箱'
              state={helpers.inputState(errorInput.account, isSubmitted)}
              value={account}
              onChange={event => {
                saveInput(this.screenId, {
                  account: event.target.value.trim()
                })
                event.preventDefault()
              }}
            />
            {helpers.inputFeedback(errorInput.account)
              ? <rs.FormFeedback>
                {helpers.inputFeedback(errorInput.account)}
              </rs.FormFeedback>
              : null}
          </rs.Col>
        </rs.FormGroup>
        <rs.FormGroup row
          color={helpers.inputState(errorInput.password, isSubmitted)}>
          <rs.Label htmlFor='password' sm={2}>密码</rs.Label>
          <rs.Col sm={10}>
            <rs.Input type='password' name='password' id='password'
              placeholder='请输入密码'
              state={helpers.inputState(errorInput.password, isSubmitted)}
              value={password}
              onChange={event => {
                saveInput(this.screenId, {
                  password: event.target.value.trim()
                })
                event.preventDefault()
              }}
            />
            {helpers.inputFeedback(errorInput.password)
              ? <rs.FormFeedback>
                {helpers.inputFeedback(errorInput.password)}
              </rs.FormFeedback>
              : null}
          </rs.Col>
        </rs.FormGroup>
        <rs.FormGroup row>
          <rs.Col sm={{size: 10, offset: 2}}>
            <rs.Button type='submit' color='primary'
              onClick={event => this.submit(event)}>登录</rs.Button>
            <rs.Button type='reset' className='ml-3'
              onClick={event => {
                resetInput(this.screenId)
                event.preventDefault()
              }}
            >
              重置
            </rs.Button>
          </rs.Col>
        </rs.FormGroup>
      </rs.Form>
    )
  }
}

function mapStateToProps (state) {
  let {error, input, screen} = state
  return {
    error,
    input,
    screen
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
