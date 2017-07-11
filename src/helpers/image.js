/**
 * 在球场
 * zaiqiuchang.com
 */

import {RES_USER_AVATARS, RES_USER_BACKGROUNDS} from '../const'
import * as helpers from './'

export function imageUrl (uri, size = 'small') {
  if (uri) {
    return (uri.startsWith('http')
      ? (uri + '?x-oss-process=style/' + size)
      : uri
    )
  } else {
    return ''
  }
}

export function fileImageUrl (file, size = 'small') {
  let uri = ''
  if (file) {
    if (file.path) {
      uri = file.path
    } else if (file.mime.startsWith('image/')) {
      uri = file.url
    } else if (file.mime.startsWith('video/')) {
      uri = helpers.videoCover(file.playUrl)
    }
  }
  return imageUrl(uri, size)
}

export function userAvatarUrl ({avatarType, avatarName, avatarImage,
  avatarFile}, size = 'small') {
  if (avatarType === 'builtin') {
    return RES_USER_AVATARS.get(avatarName)
  } else if (avatarType === 'custom') {
    if (avatarImage) {
      return imageUrl(avatarImage.path, size)
    } else if (avatarFile) {
      return imageUrl(avatarFile.url, size)
    } else {
      return null
    }
  } else {
    return null
  }
}

export function userBackgroundUrl ({backgroundType, backgroundName,
  backgroundImage, backgroundFile}, size = 'small') {
  if (backgroundType === 'builtin') {
    return RES_USER_BACKGROUNDS.get(backgroundName)
  } else if (backgroundType === 'custom') {
    if (backgroundImage) {
      return imageUrl(backgroundImage.path, size)
    } else if (backgroundFile) {
      return imageUrl(backgroundFile.url, size)
    } else {
      return null
    }
  } else {
    return null
  }
}
