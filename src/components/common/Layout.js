/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as rs from 'reactstrap'

import * as actions from '../../actions'
import * as cmp from '../'

import './Layout.css'

class Layout extends Component {
  logout () {
    let {logout} = this.props
    logout({
      cbOk: () => {
        window.location = '/'
      }
    })
  }

  render () {
    let {children} = this.props
    return (
      <div>
        <rs.Navbar id='top' className='d-flex flex-row justify-content-between bg-inverse' inverse>
          <rs.NavbarBrand tag={Link} to='/'>
            <img src={require('../../assets/zqc-icon.png')} alt='' />在球场
          </rs.NavbarBrand>
          <rs.NavLink onClick={event => this.logout(event)}>
            <rs.Button outline size='sm'>退出</rs.Button>
          </rs.NavLink>
        </rs.Navbar>

        <div className='container'>
          <div className='row'>
            <div id='left' className='col-3 bg-darker'>
              <rs.Nav className='d-flex flex-column'>
                <rs.NavItem>
                  <rs.NavLink tag={Link} to='/'>首页</rs.NavLink>
                </rs.NavItem>
                <rs.NavItem>
                  <rs.NavLink tag={Link} to='/posts'>动态列表</rs.NavLink>
                </rs.NavItem>
              </rs.Nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
