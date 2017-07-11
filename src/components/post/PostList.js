/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as components from '../'
import * as actions from '../../actions'
import * as helpers from '../../helpers'

class PostList extends Component {
  constructor (props) {
    super(props)

    this.screenId = props.screenId || 'PostList'
  }

  componentDidMount () {
    this.postList()
  }

  postList (page = 1) {
    let {pagination, setScreenState, postList} = this.props
    let limit = 10

    postList({
      offset: (page - 1) * limit,
      limit,
      cbOk: ({postIds, total}) => {
        setScreenState(this.screenId, {
          postIds,
          pagination: Object.assign({}, pagination, {
            total: Math.ceil(total / limit),
            current: page
          })
        })
      }
    })
  }

  render () {
    let {object, screen} = this.props
    let {postIds, pagination} = screen[this.screenId]
    let posts = postIds.map(v => helpers.postFromCache(object, v))
      .filter(v => v)

    return (
      <components.Layout>
        <div className='post-list d-flex flex-column'>
          {posts.map(post =>
            <components.PostItem key={post.id} post={post} />
          )}
        </div>

        <components.Pagination {...pagination}
          onClick={page => this.postList(page)}
        />
      </components.Layout>
    )
  }
}

function mapStateToProps (state) {
  let {object, screen} = state
  return {
    object,
    screen
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
