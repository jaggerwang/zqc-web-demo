/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';

import logger from './logger';
import {getStore} from './store';

let store = getStore();

let MOUNT_NODE = document.getElementById('root');

let render = () => {
  let {App} = require('./components');
  ReactDOM.render(<App store={store} />, MOUNT_NODE);
};

if (__DEV__) {
  if (module.hot) {
    let renderApp = render;
    let renderError = error => 
      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);

    render = () => {
      try {
        renderApp();
      } catch (error) {
        logger.error(error);
        renderError(error);
      }
    };

    module.hot.accept('./components', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    );
  }
}

render();
