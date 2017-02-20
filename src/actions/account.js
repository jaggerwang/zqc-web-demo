/**
 * 在球场
 * zaiqiuchang.com
 */

import {ApiResultError, ERROR_CODE_NOT_FOUND,
  ERROR_CODE_WRONG_PASSWORD} from '../error';
import * as apis from '../apis';
import * as actions from './';

export const RESET_ACCOUNT = 'reset_account';
export const SET_ACCOUNT_USER = 'set_account_user';
export const SET_ACCOUNT_PERMISSIONS = 'set_account_permissions';

export function resetAccount() {
  return {
    type: RESET_ACCOUNT,
  };
}

export function setAccountUser({user, cbOk}) {
  return dispatch => {
    dispatch(actions.cacheUsers({users: [user]}))
      .then(users => {
        let user = users[0];
        dispatch({type: SET_ACCOUNT_USER, id: user.id});
        if (cbOk) {
          cbOk(user);
        }
      })
      .catch(error => dispatch(actions.handleError(error)));
  };
}

export function login({username, mobile, email, password, cbOk}) {
  return dispatch => {
    apis.login({username, mobile, email, password})
      .then(response => {
        let {data: {user}} = response;
        dispatch(setAccountUser({user, cbOk}));
      })
      .catch(error => {
        if (error instanceof ApiResultError) {
          if (error.code == ERROR_CODE_NOT_FOUND ||
            error.code == ERROR_CODE_WRONG_PASSWORD) {
            dispatch(actions.errorFlash('帐号或密码错误'));
            return;
          }
        }
        dispatch(actions.handleError(error));
      });
  };
}

export function logout({cbOk}) {
  return dispatch => {
    apis.logout()
      .then(response => {
        dispatch(actions.reset());
        if (cbOk) {
          cbOk();
        }
      })
      .catch(error => dispatch(actions.handleError(error)));
  };
}

export function isLogined({cbOk} = {}) {
  return dispatch => {
    apis.isLogined()
      .then(response => {
        let {data: {user}} = response;
        if (user) {
          dispatch(setAccountUser({user}));
        }
        if (cbOk) {
          cbOk(user);
        }
      })
      .catch(error => dispatch(actions.handleError(error)));
  };
}

export function adminInfo({cbOk} = {}) {
  return dispatch => {
    apis.adminInfo()
      .then(response => {
        let {data: {admin}} = response;
        if (admin) {
          dispatch({
            type: SET_ACCOUNT_PERMISSIONS,
            permissions: admin.permissions,
          });
        }
        if (cbOk) {
          cbOk(admin);
        }
      })
      .catch(error => dispatch(actions.handleError(error)));
  };
}
