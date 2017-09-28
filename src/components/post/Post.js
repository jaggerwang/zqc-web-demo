/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import {MdPerson, MdLocationOn, MdPlayCircleOutline} from 'react-icons/lib/md'
import styled from 'styled-components'

import * as helpers from '../../helpers'

const Avatar = styled.img.attrs({
  src: props => helpers.userAvatarUrl(props.creator)
})`
  width: 50px;
  height: 50px;
  margin: 5px;
`

const Creator = styled(props => {
  let {className, creator} = props
  return (
    <span className={`${className}`}><MdPerson />{creator.nickname}</span>
  )
})`
  line-height: 30px;
`

const CreateTime = styled(props => {
  let {className, createTime} = props
  return (
    <span className={`fs-small color-prompt ${className}`}>{helpers.dateText(createTime)}</span>
  )
})`
  line-height: 30px;
`

const Court = styled(props => {
  let {className, court} = props
  return (
    <span className={`fs-small ${className}`}><MdLocationOn />{court.name}</span>
  )
})`
  line-height: 30px;
`

const Text = styled(props => {
  let {className, post} = props
  return (
    post.text
    ? <p className={`fs-small color-prompt ${className}`}>{post.text}</p>
    : null
  )
})`
  margin: 5px 0;
`

const Image = styled.img.attrs({
  src: props => helpers.fileImageUrl(props.file, 'middle')
})`
  width: 100px;
  height: 100px;
`

const ImageLink = styled(props => {
  let {className, file} = props
  return (
    <a className={`d-block ${className}`} target='_blank' href={helpers.fileImageUrl(file, 'huge')}>
      <Image file={file} />
    </a>
  )
})`
  margin: 5px;
`

const PlayIcon = styled(props => {
  let {className} = props
  return (
    <MdPlayCircleOutline className={`color-white ${className}`} />
  )
})`
  font-size: 36px;
  opacity: 0.8;
`

const Play = styled(props => {
  let {className} = props
  return (
    <div className={`d-flex justify-content-center align-items-center ${className}`}>
      <PlayIcon />
    </div>
  )
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const VideoLink = styled(props => {
  let {className, file} = props
  return (
    <a className={`d-block ${className}`} target='_blank' href={helpers.fileVideoUrl(file, 'fhd')}>
      <Image file={file} />
      <Play />
    </a>
  )
})`
  position: relative;
  margin: 5px;
`

export default styled(props => {
  let {className, post} = props

  return (
    <div className={`post-item bg-white ${className}`}>
      <div className='head d-flex'>
        <Avatar creator={post.creator} />

        <div className='w-100'>
          <div className={`d-flex justify-content-between`}>
            <Creator creator={post.creator} />
            <CreateTime createTime={post.createTime} />
          </div>
          <div className={`d-flex justify-content-between`}>
            <Court court={post.court} />
          </div>
        </div>
      </div>

      <Text post={post} />

      <div className='d-flex flex-wrap'>
        {post.imageFiles.map(file => file.mime.startsWith('image/') ? <ImageLink key={file.id} file={file} /> : <VideoLink key={file.id} file={file} />)}
      </div>
    </div>
  )
})`
  margin-bottom: 10px;
  padding: 5px;
`
