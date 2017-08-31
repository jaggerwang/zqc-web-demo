/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'

import * as cmp from '../'

export default class LayoutNoLogin extends Component {
  render () {
    let {children} = this.props
    return (
      <div>
        <div className='d-flex justify-content-center'>
          {children}
        </div>

        <cmp.Loading />

        <cmp.ErrorFlash />
      </div>
    )
  }
}
