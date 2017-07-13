/**
 * 在球场
 * zaiqiuchang.com
 */

import {POST_STATUS_NORMAL} from '../const'
import * as apis from '../apis'
import * as actions from './'

export function resetPost () {
  return {
    type: 'reset_post'
  }
}

export function postsOfCity ({cityCode = '', offset = '', cbOk, cbFail,
  cbFinish}) {
  return (dispatch, getState) => {
    let {account} = getState()

    apis.postsOfCity({
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
        if (cbFinish) {
          cbFinish()
        }
        let postIds = posts.filter(v => v.status === POST_STATUS_NORMAL)
          .map(v => v.id)
        if (offset === '') {
          dispatch({type: 'set_posts_of_city', cityCode, postIds})
        } else {
          dispatch({type: 'append_posts_of_city', cityCode, postIds})
        }
        if (cbOk) {
          cbOk(posts)
        }
      })
      .catch(error => {
        if (cbFinish) {
          cbFinish()
        }
        if (cbFail) {
          cbFail(error)
        } else {
          dispatch(actions.handleError(error))
        }
      })
  }
}
