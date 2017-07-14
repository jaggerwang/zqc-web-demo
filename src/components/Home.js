/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as helpers from '../helpers'
import * as actions from '../actions'
import * as cmp from './'

class Home extends Component {
  render () {
    let {object, account} = this.props
    let user = helpers.userFromCache(object, account.id)
    return (
      <cmp.Layout>
        <div className='d-flex justify-content-center'>
          <h1 className='my-5'>欢迎你，{user.nickname}！</h1>
        </div>
      </cmp.Layout>
    )
  }
}

function mapStateToProps (state) {
  let {object, account} = state
  return {
    object,
    account
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
