/**
 * 在球场
 * zaiqiuchang.com
 */

import {getApi, postApi} from './'

export function createPostComment ({postId, text}) {
  return postApi('/postComment/create', {
    postId,
    text
  })
}

export function deletePostComment (id) {
  return postApi('/postComment/delete', {id})
}

export function postCommentInfo (id) {
  return getApi('/postComment/info', {id})
}

export function postCommentInfos (postCommentIds) {
  return getApi('/postComment/infos', {
    postCommentIds: postCommentIds.join(',')
  })
}

export function postCommentsOfUser ({userId = '', limit = 20, offset = ''}) {
  return getApi('/postComment/byUser', {userId, limit, offset})
}

export function postCommentsOfPost ({postId, limit = 20, offset = ''}) {
  return getApi('/postComment/byPost', {postId, limit, offset})
}
