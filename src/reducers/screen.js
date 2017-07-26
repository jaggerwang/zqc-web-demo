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
  if (action.type === 'SET_SCREEN_STATE') {
    let {screenId, screenState} = action
    return {
      ...state,
      [screenId]: Object.assign({}, state[screenId], screenState)
    }
  } else if (action.type === 'RESET_SCREEN_STATE') {
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
