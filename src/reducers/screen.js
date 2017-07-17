/**
 * 在球场
 * zaiqiuchang.com
 */

const initialState = {
  Login: {
    isSubmitted: false
  }
}

export default (state = initialState, action) => {
  if (action.type === 'set_screen_state') {
    let {screenId, screenState} = action
    return {
      ...state,
      [screenId]: Object.assign({}, state[screenId], screenState)
    }
  } else if (action.type === 'reset_screen_state') {
    let {screenId} = action
    if (screenId === undefined) {
      return initialState
    } else {
      return {
        ...state,
        [screenId]: initialState[screenId]
      }
    }
  } else if (action.type === 'reset') {
    return initialState
  } else {
    return state
  }
}
