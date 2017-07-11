/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {VERSION} from '../config'
import * as actions from '../actions'
import * as components from './'

class Bootstrap extends Component {
  componentDidMount () {
    let {history, setStoreVersion, isLogined, adminInfo} = this.props

    setStoreVersion(VERSION)

    isLogined({
      cbOk: user => {
        if (user) {
          adminInfo()
        } else {
          history.push('/login')
        }
      }
    })
  }

  render () {
    return (
      <components.Layout>
        <div className='d-flex justify-content-center'>
          <h1 className='my-5'>正在启动...</h1>
        </div>
      </components.Layout>
    )
  }
}

function mapStateToProps (state) {
  let {layout, account} = state
  return {
    layout,
    account
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Bootstrap)
