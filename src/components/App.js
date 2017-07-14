/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Route, Switch, Link} from 'react-router-dom'
import * as rs from 'reactstrap'

import {VERSION} from '../config'
import * as actions from '../actions'
import * as components from './'

import './App.css'

class App extends Component {
  componentDidMount () {
    let {history, setStoreVersion, isLogined} = this.props

    setStoreVersion(VERSION)

    isLogined({
      cbOk: user => {
        if (!user) {
          history.push('/login')
        }
      }
    })
  }

  logout () {
    let {logout} = this.props
    logout({
      cbOk: () => {
        window.location = '/'
      }
    })
  }

  render () {
    let {account} = this.props
    return (
      <div>
        <rs.Navbar id='top' className='d-flex flex-row justify-content-between bg-inverse' inverse>
          <rs.NavbarBrand tag={Link} to='/'>
            <img src={require('../assets/zqc-icon.png')} alt='' />在球场
          </rs.NavbarBrand>
          {account.id
          ? <rs.NavLink onClick={event => this.logout(event)}>
            <rs.Button outline size='sm'>退出</rs.Button>
          </rs.NavLink>
          : <rs.NavLink tag={Link} to='/login'>
            <rs.Button outline color='success' size='sm'>登录</rs.Button>
          </rs.NavLink>}
        </rs.Navbar>

        <div className='container'>
          {account.id
          ? <div className='row'>
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
              <Route exact path='/' component={components.Home} />
              <Route path='/posts' component={components.Posts} />
            </div>
          </div>
          : <div className='d-flex justify-content-center'>
            <Switch>
              <Route path='/login' component={components.Login} />
              <Route render={() =>
                <h1 className='my-5'>正在启动...</h1>
              } />
            </Switch>
          </div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
