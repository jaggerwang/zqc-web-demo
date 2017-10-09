/**
 * 在球场
 * zaiqiuchang.com
 */

import {createBrowserHistory} from 'history'

export const history = createBrowserHistory()

export function push (path, state) {
  history.push(path, state)
}

export function replace (path, state) {
  history.replace(path, state)
}

export function navToLogin (from) {
  push('/login', {from})
}
