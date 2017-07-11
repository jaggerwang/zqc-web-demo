/**
 * 在球场
 * zaiqiuchang.com
 */

import * as actions from './'

export const RESET_USER = 'reset_user'

export function resetUser () {
  return {
    type: RESET_USER
  }
}

export function userInfo ({userId, cbOk, cbFail, cbFinish}) {
  return dispatch => {
    dispatch(actions.cacheUserByIds({userIds: [userId], update: true}))
      .then(users => {
        if (cbFinish) {
          cbFinish()
        }
        if (cbOk) {
          cbOk(users)
        }
      })
      .catch(error => {
        if (cbFinish) {
          cbFinish()
        }
        if (cbFail) {
          cbFail(error)
        } else {
          dispatch(actions.handleError(error))
        }
      })
  }
}
