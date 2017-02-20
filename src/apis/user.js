/**
 * 在球场
 * zaiqiuchang.com
 */

import {getApi} from './';

export function userInfo(id) {
  return getApi('/user/info', {id});
}

export function userInfos(ids) {
  return getApi('/user/infos', {ids: ids.join(',')});
}
