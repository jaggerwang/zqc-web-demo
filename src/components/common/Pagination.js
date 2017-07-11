/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import * as rs from 'reactstrap'

export default class Pagination extends Component {
  render () {
    let {total, current = 1, length = 10, size = '', onClick} = this.props
    let start = Math.floor((current - 1) / length) * 10 + 1
    let end = Math.min(start + length - 1, total)
    let items = []
    for (let i = start; i <= end; i++) {
      items.push(
        <rs.PaginationItem key={i} active={current === i}>
          <rs.PaginationLink href='#'
            onClick={event => {
              onClick(i)
              event.preventDefault()
            }}
          >
            {i}
          </rs.PaginationLink>
        </rs.PaginationItem>
      )
    }

    return (
      <rs.Pagination size={size} className='justify-content-center'>
        <rs.PaginationItem key='previous' href='#' disabled={current === 1}>
          <rs.PaginationLink previous
            onClick={event => {
              onClick(current - 1)
              event.preventDefault()
            }}
          />
        </rs.PaginationItem>

        {items}

        <rs.PaginationItem key='next' href='#' disabled={current === total}>
          <rs.PaginationLink next
            onClick={event => {
              onClick(current + 1)
              event.preventDefault()
            }}
          />
        </rs.PaginationItem>
      </rs.Pagination>
    )
  }
}
