/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {VERSION} from '../config'
import * as actions from '../actions'

class Bootstrap extends Component {
  componentDidMount () {
    let {history, setStoreVersion, isLogined} = this.props

    setStoreVersion(VERSION)

    isLogined({
      cbOk: user => {
        if (user) {
          history.push('/home')
        } else {
          history.push('/login')
        }
      }
    })
  }

  render () {
    return (
      <div className='d-flex justify-content-center'>
        <h1 className='my-5'>正在启动...</h1>
      </div>
    )
  }
}

function mapStateToProps (state) {
  let {account} = state
  return {
    account
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bootstrap))
