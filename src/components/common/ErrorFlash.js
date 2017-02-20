/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../../actions';

class ErrorFlash extends Component {
  render() {
    let {error} = this.props;
    error = error.flash;
    if (!error) {
      return null;
    }

    return (
      <div className="d-flex justify-content-center align-items-center full">
        <p className="m-0 p-2 bg-warning text-white rounded">{error}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let {error} = state;
  return {
    error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorFlash);
