/**
 * 在球场
 * zaiqiuchang.com
 */

export function resetScreenState (screenId) {
  return {
    type: 'RESET_SCREEN_STATE',
    screenId
  }
}

export function setScreenState (screenId, screenState) {
  return {
    type: 'SET_SCREEN_STATE',
    screenId,
    screenState
  }
}
