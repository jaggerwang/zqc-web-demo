/**
 * 在球场
 * zaiqiuchang.com
 */

const initialState = {
  byCity: {}
}

export default (state = initialState, action) => {
  if (action.type === 'set_posts_of_city') {
    let {cityCode, postIds} = action
    return {
      ...state,
      byCity: Object.assign({}, state.byCity, {[cityCode]: postIds})
    }
  } else if (action.type === 'append_posts_of_city') {
    let {cityCode, postIds} = action
    postIds = (state.byCity[cityCode] || []).concat(postIds)
    return {
      ...state,
      byCity: Object.assign({}, state.byCity, {[cityCode]: postIds})
    }
  } else if (action.type === 'reset' || action.type === 'reset_post') {
    return initialState
  } else {
    return state
  }
}
