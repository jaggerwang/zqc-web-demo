/**
 * 在球场
 * zaiqiuchang.com
 */

import {ERROR_CODE_NOT_FOUND, ERROR_CODE_WRONG_PASSWORD} from '../error'
import {apiClient} from '../helpers'
import * as actions from './'

export function resetAccount () {
  return {
    type: 'RESET_ACCOUNT'
  }
}

export function setAccountId (id) {
  return {
    type: 'SET_ACCOUNT_ID',
    id
  }
}

export function login ({username, mobile, email, password, cbOk}) {
  return dispatch => {
    apiClient.get('/login', {params: {username, mobile, email, password}})
      .then(response => {
        let {data: {user}} = response
        if (user) {
          return dispatch(actions.cacheUsers({users: [user]}))
        } else {
          return []
        }
      })
      .then(users => {
        if (users.length > 0) {
          let user = users[0]
          dispatch(setAccountId(user.id))
          if (cbOk) {
            cbOk(user)
          }
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 200) {
          const {code} = error.response.data
          if (code === ERROR_CODE_NOT_FOUND || code === ERROR_CODE_WRONG_PASSWORD) {
            dispatch(actions.errorFlash('帐号或密码错误'))
            return
          }
        }
        dispatch(actions.handleError(error))
      })
  }
}

export function logout ({cbOk}) {
  return dispatch => {
    apiClient.get('/logout')
      .then(response => {
        dispatch(actions.reset())
        if (cbOk) {
          cbOk()
        }
      })
      .catch(error => dispatch(actions.handleError(error)))
  }
}

export function isLogined ({cbOk} = {}) {
  return dispatch => {
    apiClient.get('isLogined')
      .then(response => {
        let {data: {user}} = response
        if (user) {
          return dispatch(actions.cacheUsers({users: [user]}))
        } else {
          return []
        }
      })
      .then(users => {
        if (users.length > 0) {
          let user = users[0]
          dispatch(setAccountId(user.id))
          if (cbOk) {
            cbOk(user)
          }
        }
      })
      .catch(error => dispatch(actions.handleError(error)))
  }
}
