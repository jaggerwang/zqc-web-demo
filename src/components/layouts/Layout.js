/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import * as rs from 'reactstrap';

import * as cmp from '../';
import * as actions from '../../actions';
import './Layout.scss';

class Layout extends Component {
  logout(event) {
    let {router, logout} = this.props;

    logout({
      cbOk: () => router.push('/'),
    });
    
    event.preventDefault();
  }

  render() {
    let {children, layout, account, toggleTopNav, 
      toggleLeftNavPost} = this.props;
    let {isOpenTopNav, isOpenLeftNavPost} = layout;
    
    return (
      <div>
        <div className="top">
          <rs.Navbar className="bg-inverse" inverse toggleable>
            <div className="container">
              <rs.NavbarToggler onClick={toggleTopNav} />
              <rs.NavbarBrand tag={Link} to="/">
                <img src={require('../../../assets/zqc-icon.png')} />
                在球场管理后台
              </rs.NavbarBrand>
              <rs.Collapse isOpen={isOpenTopNav} navbar>
                <rs.Nav className="ml-auto" navbar>
                  <rs.NavItem>
                    <rs.NavLink target="_blank" 
                      href="https://www.zaiqiuchang.com"
                    >
                      在球场
                    </rs.NavLink>
                  </rs.NavItem>
                  <rs.NavItem>
                    {account.id 
                      ? <rs.NavLink onClick={event => this.logout(event)}>
                        <rs.Button outline size="sm">退出</rs.Button>
                      </rs.NavLink> 
                      : <rs.NavLink tag={Link} to="/login">
                        <rs.Button outline color="success" size="sm">
                          登录
                        </rs.Button>
                      </rs.NavLink>}
                  </rs.NavItem>
                </rs.Nav>
              </rs.Collapse>
            </div>
          </rs.Navbar>
        </div>

        <div className="container">
          <div className="row">
            <div className="left col-3 bg-darker">
              <rs.Nav className="d-flex flex-column">
                <rs.NavItem>
                  <rs.NavLink tag={Link} to="/post" 
                    onClick={toggleLeftNavPost}
                  >
                    动态管理<MdChevronRight />
                  </rs.NavLink>
                  <rs.Collapse isOpen={isOpenLeftNavPost}>
                    <rs.Nav className="d-flex flex-column">
                      <rs.NavItem>
                        <rs.NavLink tag={Link} to="/post/list">
                          动态列表
                        </rs.NavLink>
                      </rs.NavItem><rs.NavItem>
                        <rs.NavLink tag={Link} to="/post/create">
                          创建动态
                        </rs.NavLink>
                      </rs.NavItem>
                    </rs.Nav>
                  </rs.Collapse>
                </rs.NavItem>
              </rs.Nav>
            </div>

            <div className="main col-9 bg-normal">{children}</div>
          </div>
        </div>

        <cmp.Loading />

        <cmp.ErrorFlash />
      </div>
    );
  }
}

function mapStateToProps(state) {
  let {layout, account} = state;
  return {
    layout,
    account,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
