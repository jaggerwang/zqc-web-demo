/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import {MdPerson, MdLocationOn, MdPlayCircleOutline} from 'react-icons/lib/md'

import * as helpers from '../../helpers'

export default props => {
  let {post} = props

  return (
    <div className='post-item bg-white' style={styles.post}>
      <div className='head d-flex'>
        <img alt='' src={helpers.userAvatarUrl(post.creator)} style={styles.avatar} />

        <div className='w-100'>
          <div className='d-flex justify-content-between'>
            <span style={styles.creator}><MdPerson />{post.creator.nickname}</span>
            <span className='fs-small color-prompt' style={styles.createTime}>{helpers.dateText(post.createTime)}</span>
          </div>
          <div className='d-flex justify-content-between'>
            <span className='fs-small' style={styles.court}><MdLocationOn />{post.court.name}</span>
          </div>
        </div>
      </div>

      {post.text
      ? <p className='fs-small color-prompt' style={styles.text}>{post.text}</p>
      : null}

      <div className='d-flex flex-wrap'>
        {post.imageFiles.map(file => file.mime.startsWith('image/')
        ? <a key={file.id} className='d-block' style={styles.imageLink} target='_blank' href={helpers.fileImageUrl(file, 'huge')}>
          <img alt='' src={helpers.fileImageUrl(file, 'middle')} style={styles.image} />
        </a>
        : <a key={file.id} className='d-block' style={styles.videoLink} target='_blank' href={helpers.fileVideoUrl(file, 'fhd')}>
          <img alt='' src={helpers.fileImageUrl(file, 'middle')} style={styles.image} />
          <div className='d-flex justify-content-center align-items-center' style={styles.play}>
            <MdPlayCircleOutline className='color-white' style={styles.playIcon} />
          </div>
        </a>)}
      </div>
    </div>
  )
}

const styles = {
  avatar: {
    width: '50px',
    height: '50px',
    margin: '5px'
  },
  creator: {
    lineHeight: '30px'
  },
  createTime: {
    lineHeight: '30px'
  },
  court: {
    lineHeight: '30px'
  },
  text: {
    margin: '5px 0'
  },
  image: {
    width: '100px',
    height: '100px'
  },
  imageLink: {
    margin: '5px'
  },
  playIcon: {
    fontSize: '36px',
    opacity: 0.8
  },
  play: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  videoLink: {
    position: 'relative',
    margin: '5px'
  },
  post: {
    marginbottom: '10px',
    padding: '5px'
  }
}
