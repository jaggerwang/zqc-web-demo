/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {VERSION} from '../config'
import * as actions from '../actions'
import * as cmp from './'

class Bootstrap extends Component {
  componentDidMount () {
    let {history, setStoreVersion, isLogined} = this.props

    setStoreVersion(VERSION)

    isLogined({
      cbOk: user => {
        if (user) {
          history.replace('/home')
        } else {
          history.replace('/login')
        }
      }
    })
  }

  constructor (props) {
    super(props)

    this.screenId = props.screenId || 'Bootstrap'
  }

  render () {
    return (
      <cmp.LayoutNoLogin>
        <h1 className='my-5'>正在启动...</h1>
      </cmp.LayoutNoLogin>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Bootstrap)
