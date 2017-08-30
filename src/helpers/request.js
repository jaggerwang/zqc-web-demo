/**
 * 在球场
 * zaiqiuchang.com
 */

import axios from 'axios'

import logger from '../logger'
import store from '../store'
import {loadingStart, loadingEnd} from '../actions'

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 5000,
  maxContentLength: Math.pow(1024, 2)
})

apiClient.interceptors.request.use(
  config => {
    const {method, url, params, data, isSilent = false} = config
    logger.debug(method, url, params || data)

    const {dispatch} = store
    if (!isSilent) {
      dispatch(loadingStart())
    }

    return config
  },
  error => {
    const {config: {isSilent}} = error
    const {dispatch} = store
    if (!isSilent) {
      dispatch(loadingEnd())
    }

    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  response => {
    const {status, data, config: {url, isSilent = false, checkResponseCode = true}} = response
    logger.debug(status, url, data)

    const {dispatch} = store
    if (!isSilent) {
      dispatch(loadingEnd())
    }

    let {code, message} = data
    if (checkResponseCode && code !== 0) {
      let error = new Error(message)
      error.code = code
      error.response = response
      return Promise.reject(error)
    }

    return data
  },
  error => {
    const {config: {isSilent}} = error
    const {dispatch} = store
    if (!isSilent) {
      dispatch(loadingEnd())
    }

    return Promise.reject(error)
  }
)
