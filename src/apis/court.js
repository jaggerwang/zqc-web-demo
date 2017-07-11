/**
 * 在球场
 * zaiqiuchang.com
 */

import {getApi, postApi} from './'

export function createCourt ({name, location, cityCode, sportCode}) {
  let {longitude, latitude} = location
  return postApi('/court/create', {
    name,
    location: `${longitude},${latitude}`,
    cityCode,
    sportCode
  })
}

export function courtInfo (id) {
  return getApi('/court/info', {id})
}

export function courtInfos (ids) {
  return getApi('/court/infos', {ids: ids.join(',')})
}

export function nearbyCourts ({location, sportCode = '', distance = '', limit = 10}) {
  let {longitude, latitude} = location
  return getApi('/court/nearby', {
    location: `${longitude},${latitude}`,
    sportCode,
    distance,
    limit
  })
}

export function nearbyCourtsFromLbs ({location, sportCode = '', distance = '', limit = 10}) {
  let {longitude, latitude} = location
  return getApi('/court/nearbyFromLbs', {
    location: `${longitude},${latitude}`,
    sportCode,
    distance,
    limit
  })
}
