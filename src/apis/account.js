/**
 * 在球场
 * zaiqiuchang.com
 */

import {getApi} from './';

export function login({username = '', mobile = '', email = '', password}) {
  return getApi('/login', {username, mobile, email, password});
}

export function isLogined() {
  return getApi('/isLogined');
}

export function logout() {
  return getApi('/logout');
}

export function adminInfo(id = '') {
  return getApi('/admin/info', {id});
}
