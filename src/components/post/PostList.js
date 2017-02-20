/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react';

import * as cmp from '../';

export default class PostList extends Component {
  render() {
    return (
      <cmp.Layout>
        <div className="d-flex justify-content-center">
          <h1 className="my-5">动态列表</h1>
        </div>
      </cmp.Layout>
    );
  }
}
