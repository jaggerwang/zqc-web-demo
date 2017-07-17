/**
 * 在球场
 * zaiqiuchang.com
 */

export function resetScreenState (screenId) {
  return {
    type: 'reset_screen_state',
    screenId
  }
}

export function setScreenState (screenId, screenState) {
  return {
    type: 'set_screen_state',
    screenId,
    screenState
  }
}
