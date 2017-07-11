/**
 * 在球场
 * zaiqiuchang.com
 */

import {getApi, postApi} from './'

export function createPost ({text = '', imageIds, courtId}, {background = false} = {}) {
  return postApi('/post/create',
    {text, imageIds: imageIds.join(), courtId},
    {background}
  )
}

export function deletePost (id) {
  return postApi('/post/delete', {id})
}

export function updatePost (id, update, {background = false} = {}) {
  let newUpdate = {id}
  Object.entries(update).forEach(([k, v]) => {
    if (k === 'imageIds') {
      v = v.join()
    }
    newUpdate[k] = v
  })
  return postApi('/post/update', newUpdate, {background}
  )
}

export function postInfo (id) {
  return getApi('/post/info', {id})
}

export function postInfos (ids) {
  return getApi('/post/infos', {ids: ids.join(',')})
}

export function nearbyPosts ({location, sportCode = '', distance = '', status = 0,
  limit = 10, offset = ''}) {
  let {longitude, latitude} = location
  return getApi('/post/nearby', {
    location: `${longitude},${latitude}`,
    sportCode,
    distance,
    status,
    limit,
    offset
  })
}

export function postsOfUser ({userId = '', status = 0, limit = 10, offset = ''}) {
  return getApi('/post/byUser', {userId, status, limit, offset})
}

export function postsOfCourt ({courtId, status = 0, limit = 10, offset = ''}) {
  return getApi('/post/byCourt', {courtId, status, limit, offset})
}

export function postsOfCity ({cityCode = '', sportCode = '', status = 0, limit = 10,
  offset = ''}) {
  return getApi('/post/byCity', {cityCode, sportCode, status, limit, offset})
}
