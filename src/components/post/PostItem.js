/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import MdPerson from 'react-icons/lib/md/person'
import MdLocationOn from 'react-icons/lib/md/location-on'
import MdPlayCircleOutline from 'react-icons/lib/md/play-circle-outline'

import * as helpers from '../../helpers'
import * as actions from '../../actions'
import './PostItem.css'

class PostItem extends Component {
  render () {
    let {post} = this.props

    return (
      <div className='post-item bg-white'>
        <div className='head d-flex'>
          <img className='avatar' src={helpers.userAvatarUrl(post.creator)} alt='' />

          <div className='w-100'>
            <div className='user d-flex justify-content-between
              align-items-center'
            >
              <span><MdPerson />{post.creator.nickname}</span>
              <span className='fs-small color-prompt'>
                {helpers.dateText(post.createTime)}
              </span>
            </div>

            <div className='court d-flex justify-content-between fs-small
              align-items-center'>
              <span><MdLocationOn />{post.court.name}</span>
            </div>
          </div>
        </div>

        {post.text
          ? <p className='text fs-small color-prompt'>{post.text}</p>
          : null}

        <div className='images d-flex flex-wrap'>
          {post.imageFiles.map(file =>
            file.mime.startsWith('image/')
              ? <a key={file.id} className='d-block' target='_blank'
                href={helpers.fileImageUrl(file, 'huge')}
              >
                <img src={helpers.fileImageUrl(file, 'middle')} alt='' />
              </a>
              : <a key={file.id} className='d-block' target='_blank'
                href={helpers.fileVideoUrl(file, 'fhd')}
              >
                <img src={helpers.fileImageUrl(file, 'middle')} alt='' />
                <div className='full d-flex justify-content-center
                  align-items-center'
                >
                  <MdPlayCircleOutline className='color-white' />
                </div>
              </a>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)
