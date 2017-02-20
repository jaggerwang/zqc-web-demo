/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';

import {VERSION} from '../config';
import * as cmp from './';
import * as actions from '../actions';

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    let {setStoreVersion, isLogined, adminInfo} = this.props;

    setStoreVersion(VERSION);

    isLogined({
      cbOk: user => {
        if (user) {
          adminInfo();
        } else {
          browserHistory.push('/login');
        }
      },
    });
  }

  render() {
    const {store} = this.props;

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/">
            <IndexRoute component={cmp.Admin} />
            <Route path="login" component={cmp.Login} />
            <Route path="post">
              <IndexRoute component={cmp.Post} />
              <Route path="create" component={cmp.CreatePost} />
              <Route path="list" component={cmp.PostList} />
              <Route path=":id" component={cmp.PostDetail} />
            </Route>
          </Route>
        </Router>
      </Provider>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
