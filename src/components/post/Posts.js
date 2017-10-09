/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../../actions'
import * as helpers from '../../helpers'
import Post from './Post'

class Posts extends Component {
  componentDidMount () {
    let {account, postsOfCity} = this.props

    postsOfCity({
      cityCode: account.city.code
    })
  }

  render () {
    let {object, account, post} = this.props
    let postIds = post.byCity[account.city.code] || []
    let posts = postIds.map(v => helpers.postFromCache(object, v))
      .filter(v => v)

    return (
      <div className='post-list d-flex flex-column'>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  let {object, account, post} = state
  return {
    object,
    account,
    post
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
