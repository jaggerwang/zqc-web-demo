/**
 * 在球场
 * zaiqiuchang.com
 */

import valid from 'validate.js';

import * as actions from './';

export const RESET_INPUT = 'reset_input';
export const INPUT = 'input';

export function resetInput(screenId) {
  return dispatch => {
    dispatch({
      type: RESET_INPUT,
      screenId,
    });

    dispatch(actions.resetErrorInput(screenId));
  };
}

export function saveInput(screenId, input) {
  return dispatch => {
    dispatch({
      type: INPUT,
      screenId,
      input,
    });

    dispatch(validateInput(screenId, input));
  };
}

export function validateInput(screenId, input, cbOk) {
  return dispatch => {
    let error = {};
    Object.entries(input).forEach(([k, v]) => {
      if (constraints[screenId] && constraints[screenId][k]) {
        error[k] = valid.single(v, constraints[screenId][k]) || [];
      } else {
        error[k] = [];
      }
    });

    dispatch(actions.errorInput(screenId, error));

    if (Object.values(error).every(v => v.length == 0)) {
      if (cbOk) {
        cbOk();
      }
    }
  };
}

let accountConstraints = {
  presence: {
    message: '请输入帐号。',
  },
};

let passwordConstraints = {
  length: {
    minimum: 6,
    message: '密码长度至少为6。',
  },
};

let constraints = {
  Login: {
    account: accountConstraints,
    password: passwordConstraints,
  },
};
