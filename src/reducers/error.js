/**
 * 在球场
 * zaiqiuchang.com
 */

const initialState = {
  flash: ''
}

export default (state = initialState, action) => {
  if (action.type === 'ERROR_FLASH') {
    let {error} = action
    return {
      ...state,
      flash: error
    }
  } else if (action.type === 'RESET' || action.type === 'RESET_ERROR') {
    return initialState
  } else {
    return state
  }
}
