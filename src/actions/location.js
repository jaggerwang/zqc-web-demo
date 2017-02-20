/**
 * 在球场
 * zaiqiuchang.com
 */

export const RESET_LOCATION = 'reset_location';
export const CHANGE_LOCATION = 'change_location';

export function resetLocation() {
  return {
    type: RESET_LOCATION,
  };
}

export function changeLocation(location = '/') {
  return {
    type: CHANGE_LOCATION,
    payload: location,
  };
}
