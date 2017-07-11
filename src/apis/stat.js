/**
 * 在球场
 * zaiqiuchang.com
 */

import {getApi} from './'

export function userStat (id) {
  return getApi('/stat/user', {id})
}

export function userStats (ids) {
  return getApi('/stat/users', {ids: ids.join(',')})
}

export function postStat (id) {
  return getApi('/stat/post', {id})
}

export function postStats (ids) {
  return getApi('/stat/posts', {ids: ids.join(',')})
}

export function courtStat (id) {
  return getApi('/stat/court', {id})
}

export function courtStats (ids) {
  return getApi('/stat/courts', {ids: ids.join(',')})
}

export function fileStat (id) {
  return getApi('/stat/file', {id})
}

export function fileStats (ids) {
  return getApi('/stat/files', {ids: ids.join(',')})
}

export function mostPlayedCourtsOfUser ({userId = '', limit = 10}) {
  return getApi('/stat/mostPlayedCourtsOfUser', {userId, limit})
}

export function mostPlayedUsersOfCourt ({courtId = '', limit = 10}) {
  return getApi('/stat/mostPlayedUsersOfCourt', {courtId, limit})
}

export function mostFavoredFilesOfUser ({userId = '', fileType = 0, limit = 10}) {
  return getApi('/stat/mostFavoredFilesOfUser', {userId, fileType, limit})
}
