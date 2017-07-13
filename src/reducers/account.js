/**
 * 在球场
 * zaiqiuchang.com
 */

import * as actions from '../actions'

const initialState = {
  id: '',
  city: {
    code: '',
    name: '全国'
  },
  sport: {
    code: 'tennis',
    name: '网球'
  }
}

export default (state = initialState, action) => {
  if (action.type === actions.SET_ACCOUNT_USER) {
    let {id} = action
    return {
      ...state,
      id
    }
  } else if (action.type === actions.RESET ||
    action.type === actions.RESET_ACCOUNT) {
    return initialState
  } else {
    return state
  }
}
