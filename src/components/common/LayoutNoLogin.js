/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'

export default class LayoutNoLogin extends Component {
  render () {
    let {children} = this.props
    return (
      <div className='d-flex justify-content-center'>
        {children}
      </div>
    )
  }
}
