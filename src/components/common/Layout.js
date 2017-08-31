/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as rs from 'reactstrap'
import styled from 'styled-components'

import * as actions from '../../actions'
import * as cmp from '../'

const Logo = styled.img.attrs({
  src: require('../../assets/zqc-icon.png')
})`
  margin-right: 5px;
  width: 30px;
  height: 30px;
`

const Menu = styled(props => {
  let {className} = props
  return (
    <rs.Nav className={`d-flex flex-column ${className}`}>
      <rs.NavItem>
        <rs.NavLink tag={Link} to='/'>首页</rs.NavLink>
      </rs.NavItem>
      <rs.NavItem>
        <rs.NavLink tag={Link} to='/posts'>动态列表</rs.NavLink>
      </rs.NavItem>
    </rs.Nav>
  )
})`
  min-height: 1080px;
`

class Layout extends Component {
  logout () {
    let {logout} = this.props
    logout()
      .then(() => {
        window.location.href = '/'
      })
  }

  render () {
    let {children} = this.props
    return (
      <div>
        <rs.Navbar className='d-flex flex-row justify-content-between bg-inverse' inverse>
          <rs.NavbarBrand tag={Link} to='/'>
            <Logo />在球场
          </rs.NavbarBrand>

          <rs.NavLink onClick={event => this.logout(event)}>
            <rs.Button outline size='sm'>退出</rs.Button>
          </rs.NavLink>
        </rs.Navbar>

        <div className='container'>
          <div className='row'>
            <div className='col-3 bg-darker'>
              <Menu />
            </div>

            <div id='main' className='col-9 bg-normal'>
              {children}
            </div>
          </div>
        </div>

        <cmp.Loading />

        <cmp.ErrorFlash />
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

export default styled(connect(mapStateToProps, mapDispatchToProps)(Layout))`
`
