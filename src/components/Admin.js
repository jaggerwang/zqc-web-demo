/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react';

import * as cmp from './';

export default class Admin extends Component {
  render() {
    return (
      <cmp.Layout>
        <div className="d-flex justify-content-center">
          <h1 className="my-5">在球场管理后台</h1>
        </div>
      </cmp.Layout>
    );
  }
}
