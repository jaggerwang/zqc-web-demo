/**
 * 在球场
 * zaiqiuchang.com
 */

import {getApi} from './'

export function isLogined () {
  return getApi('/isLogined')
}

export function login ({username = '', mobile = '', email = '', password}) {
  return getApi('/login', {username, mobile, email, password})
}

export function logout () {
  return getApi('/logout')
}
