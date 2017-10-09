/**
 * 在球场
 * zaiqiuchang.com
 */

import logger from '../logger'
import {history, navToLogin} from '../nav'

export function resetError () {
  return {
    type: 'RESET_ERROR'
  }
}

export function errorFlash (error, duration = 2000) {
  return dispatch => {
    dispatch({
      type: 'ERROR_FLASH',
      error
    })
    setTimeout(() => {
      dispatch({
        type: 'ERROR_FLASH',
        error: ''
      })
    }, duration)
  }
}

export function handleError (error) {
  return dispatch => {
    logger.error(error)
    if (error.response) {
      if (error.response.status === 200) {
        dispatch(errorFlash(error.message))
      } else if (error.response.status === 401) {
        navToLogin(history.location)
      } else {
        dispatch(errorFlash('服务端出错'))
      }
    } else if (error.request) {
      dispatch(errorFlash('服务端未响应'))
    } else if (error instanceof Object && error.hasOwnProperty('message')) {
      dispatch(errorFlash(error.message))
    } else {
      dispatch(errorFlash('未知错误'))
    }
  }
}
