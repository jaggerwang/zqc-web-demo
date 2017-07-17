/**
 * 在球场
 * zaiqiuchang.com
 */

import {ApiResultError, ERROR_CODE_NOT_FOUND, ERROR_CODE_WRONG_PASSWORD} from '../error'
import * as apis from '../apis'
import * as actions from './'

export function resetAccount () {
  return {
    type: 'reset_account'
  }
}

export function setAccountUser ({user, cbOk}) {
  return dispatch => {
    if (user) {
      dispatch(actions.cacheUsers({users: [user]}))
        .then(users => {
          let user = users[0]
          dispatch({type: 'set_account_user', id: user.id})
          if (cbOk) {
            cbOk(user)
          }
        })
        .catch(error => dispatch(actions.handleError(error)))
    } else {
      dispatch({type: 'set_account_user', id: ''})
      if (cbOk) {
        cbOk(null)
      }
    }
  }
}

export function login ({username, mobile, email, password, cbOk}) {
  return dispatch => {
    apis.login({username, mobile, email, password})
      .then(response => {
        let {data: {user}} = response
        dispatch(setAccountUser({user, cbOk}))
      })
      .catch(error => {
        if (error instanceof ApiResultError) {
          if (error.code === ERROR_CODE_NOT_FOUND ||
            error.code === ERROR_CODE_WRONG_PASSWORD) {
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
    apis.logout()
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
    apis.isLogined()
      .then(response => {
        let {data: {user}} = response
        dispatch(setAccountUser({user, cbOk}))
      })
      .catch(error => dispatch(actions.handleError(error)))
  }
}
