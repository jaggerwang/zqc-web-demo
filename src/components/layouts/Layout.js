/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Route, Link} from 'react-router-dom'
import * as rs from 'reactstrap'

import * as components from '../'
import * as actions from '../../actions'
import './Layout.css'

class Layout extends Component {
  logout (event) {
    let {history, logout} = this.props

    logout({
      cbOk: () => history.push('/')
    })

    event.preventDefault()
  }

  render () {
    let {account} = this.props

    return (
      <div>
        <div id='top'>
          <rs.Navbar className='bg-inverse' inverse>
            <div className='container'>
              <rs.NavbarBrand tag={Link} to='/'>
                <img src={require('../../assets/zqc-icon.png')} alt='' />在球场
              </rs.NavbarBrand>
              <rs.Collapse navbar>
                <rs.Nav className='ml-auto' navbar>
                  <rs.NavItem>
                    <rs.NavLink target='_blank' href='https://www.zaiqiuchang.com'>官网</rs.NavLink>
                  </rs.NavItem>
                  <rs.NavItem>
                    {account.id
                      ? <rs.NavLink onClick={event => this.logout(event)}>
                        <rs.Button outline size='sm'>退出</rs.Button>
                      </rs.NavLink>
                      : <rs.NavLink tag={Link} to='/login'>
                        <rs.Button outline color='success' size='sm'>登录</rs.Button>
                      </rs.NavLink>}
                  </rs.NavItem>
                </rs.Nav>
              </rs.Collapse>
            </div>
          </rs.Navbar>
        </div>

        <div className='container'>
          <div className='row'>
            <div id='left' className='col-3 bg-darker'>
              <rs.Nav className='d-flex flex-column'>
                <rs.NavItem>
                  <rs.NavLink tag={Link} to='/'>首页</rs.NavLink>
                </rs.NavItem><rs.NavItem>
                  <rs.NavLink tag={Link} to='/posts'>动态列表</rs.NavLink>
                </rs.NavItem>
              </rs.Nav>
            </div>

            <div id='main' className='col-9 bg-normal'>
              <Route path='/home' component={components.Home} />
              <Route path='/posts' component={components.Posts} />
            </div>
          </div>
        </div>

        <components.Loading />

        <components.ErrorFlash />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))
