/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import * as rs from 'reactstrap'
import {reduxForm, Field} from 'redux-form'

import * as cmp from '../'

export default reduxForm({
  form: 'loginForm'
})(props => {
  const {handleSubmit, pristine, submitting, reset} = props

  return (
    <rs.Form className='m-5' style={styles.form} onSubmit={handleSubmit}>
      <rs.FormGroup row>
        <rs.Label htmlFor='account' sm={3}>帐号：</rs.Label>
        <rs.Col sm={9}>
          <Field
            id='account'
            name='account'
            component={cmp.InputField}
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
            component={cmp.InputField}
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

const styles = {
  form: {
    width: '400px'
  }
}
