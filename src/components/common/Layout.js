/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'

import * as cmp from '../'

export default class Layout extends Component {
  render () {
    let {children} = this.props

    return (
      <div>
        {children}

        <cmp.Loading />

        <cmp.ErrorFlash />
      </div>
    )
  }
}
