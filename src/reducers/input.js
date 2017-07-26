/**
 * 在球场
 * zaiqiuchang.com
 */

const initialState = {
  Login: {
    account: '',
    password: ''
  }
}

export default (state = initialState, action) => {
  if (action.type === 'INPUT') {
    let {screenId, input} = action
    return {
      ...state,
      [screenId]: Object.assign({}, state[screenId], input)
    }
  } else if (action.type === 'RESET_INPUT') {
    let {screenId} = action
    if (screenId === undefined) {
      return initialState
    } else {
      return {
        ...state,
        [screenId]: initialState[screenId]
      }
    }
  } else if (action.type === 'RESET') {
    return initialState
  } else {
    return state
  }
}
