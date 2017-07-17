/**
 * 在球场
 * zaiqiuchang.com
 */

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
  if (action.type === 'set_account_user') {
    let {id} = action
    return {
      ...state,
      id
    }
  } else if (action.type === 'reset' || action.type === 'reset_account') {
    return initialState
  } else {
    return state
  }
}
