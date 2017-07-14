/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../../actions'
import * as helpers from '../../helpers'
import * as cmp from '../'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.screenId = props.screenId || 'Posts'
  }

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
      <cmp.Layout>
        <div className='post-list d-flex flex-column'>
          {posts.map(post =>
            <cmp.PostItem key={post.id} post={post} />
          )}
        </div>
      </cmp.Layout>
    )
  }
}

function mapStateToProps (state) {
  let {object, screen, account, post} = state
  return {
    object,
    screen,
    account,
    post
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
