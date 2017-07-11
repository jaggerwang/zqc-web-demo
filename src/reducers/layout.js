/**
 * 在球场
 * zaiqiuchang.com
 */

import * as actions from '../actions'

const initialState = {
  isOpenTopNav: false,
  isOpenLeftNavPost: true
}

export default (state = initialState, action) => {
  if (action.type === actions.TOGGLE_TOP_NAV) {
    let {isOpenTopNav} = state

    return {
      ...state,
      isOpenTopNav: !isOpenTopNav
    }
  } else if (action.type === actions.TOGGLE_LEFT_NAV_POST) {
    let {isOpenLeftNavPost} = state

    return {
      ...state,
      isOpenLeftNavPost: !isOpenLeftNavPost
    }
  } else if (action.type === actions.RESET ||
    action.type === actions.RESET_LAYOUT) {
    return initialState
  } else {
    return state
  }
}
