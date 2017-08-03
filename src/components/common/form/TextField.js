/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react'
import * as rs from 'reactstrap'

export default props => {
  let {input, meta, ...otherProps} = props
  return (<rs.Input {...otherProps} {...props.input} />)
}
