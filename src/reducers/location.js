/**
 * 在球场
 * zaiqiuchang.com
 */

import * as actions from '../actions';

const initialState = null;

export default (state = initialState, action) => {
  if (action.type == actions.CHANGE_LOCATION) {
    let {payload} = action;
    return payload;
  } else if (action.type == actions.RESET || 
    action.type == actions.RESET_LOCATION) {
    return initialState;
  } else {
    return state;
  }
};
