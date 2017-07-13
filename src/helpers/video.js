/**
 * 在球场
 * zaiqiuchang.com
 */

import url from 'url'
import path from 'path'

import {VIDEO_RATES} from '../const'

export function videoUrl (uri, rate = 'ld') {
  if (uri.startsWith('http')) {
    let urlParsed = url.parse(uri)
    urlParsed.pathname = path.dirname(urlParsed.pathname) +
      path.basename(urlParsed.pathname, path.extname(urlParsed.pathname)) +
      '-' + rate + path.extname(urlParsed.pathname)
    uri = url.format(urlParsed)
  }
  return uri
}

export function fileVideoUrl (file, rate = 'ld') {
  let uri = ''
  if (file) {
    if (file.path) {
      uri = file.path
    } else if (file.mime.startsWith('video/')) {
      uri = file.playUrl
    }
  }
  return videoUrl(uri, rate)
}

export function videoCover (uri) {
  if (uri.startsWith('http')) {
    let urlParsed = url.parse(uri)
    urlParsed.pathname = path.dirname(urlParsed.pathname) +
      path.basename(urlParsed.pathname, path.extname(urlParsed.pathname)) +
      '-cover.jpg'
    uri = url.format(urlParsed)
  }
  return uri
}

export function videoRateText (rate) {
  for (let {label, value} of VIDEO_RATES) {
    if (value === rate) {
      return label
    }
  }
  return ''
}

export function filePixelSize (file) {
  let pixelSize = [0, 0]
  if (file) {
    if (file.width && file.height) {
      pixelSize = [file.width, file.height]
    } else if (file.pixelSize) {
      pixelSize = file.pixelSize
    }
  }
  return pixelSize
}
