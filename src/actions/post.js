/**
 * 在球场
 * zaiqiuchang.com
 */

import {POST_STATUS_NORMAL} from '../const'
import {apiClient} from '../helpers'
import * as actions from './'

export function resetPost () {
  return {
    type: 'RESET_POST'
  }
}

export function setPostsOfCity (cityCode, postIds) {
  return {
    type: 'SET_POSTS_OF_CITY',
    cityCode,
    postIds
  }
}

export function appendPostsOfCity (cityCode, postIds) {
  return {
    type: 'APPEND_POSTS_OF_CITY',
    cityCode,
    postIds
  }
}

export function postsOfCity ({cityCode = '', offset = ''}) {
  return (dispatch, getState) => {
    let {account} = getState()

    apiClient.get('/post/byCity', {
      cityCode,
      sportCode: account.sport.code,
      status: POST_STATUS_NORMAL,
      offset
    })
      .then(response => {
        let {data: {posts}} = response
        return dispatch(actions.cachePosts({posts}))
      })
      .then(posts => {
        let postIds = posts.filter(v => v.status === POST_STATUS_NORMAL)
          .map(v => v.id)
        if (offset === '') {
          dispatch(setPostsOfCity(cityCode, postIds))
        } else {
          dispatch(appendPostsOfCity(cityCode, postIds))
        }
      })
      .catch(error => dispatch(actions.handleError(error)))
  }
}
