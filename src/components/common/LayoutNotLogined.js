/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'

import * as cmp from '../'

export default class LayoutNotLogined extends Component {
  render () {
    let {children} = this.props

    return (
      <cmp.Layout>
        <div className='d-flex justify-content-center'>
          {children}
        </div>
      </cmp.Layout>
    )
  }
}
