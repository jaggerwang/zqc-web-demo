/**
 * 在球场
 * zaiqiuchang.com
 */

export const RESET_LAYOUT = 'reset_layout';
export const TOGGLE_TOP_NAV = 'toggle_top_nav';
export const TOGGLE_LEFT_NAV_POST = 'toggle_left_nav_post';

export function resetLayout() {
  return {
    type: RESET_LAYOUT,
  };
}

export function toggleTopNav() {
  return {
    type: TOGGLE_TOP_NAV,
  };
}

export function toggleLeftNavPost() {
  return {
    type: TOGGLE_LEFT_NAV_POST,
  };
}
