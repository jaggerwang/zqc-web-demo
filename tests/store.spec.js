/**
 * 在球场
 * zaiqiuchang.com
 */

import {createStore} from 'store';
import * as actions from 'actions';

describe('(Store) createStore', () => {
  let store;

  before(() => {
    store = createStore();
  });

  it('should have an empty asyncReducers object', () => {
    expect(store.asyncReducers).to.be.an('object');
    expect(store.asyncReducers).to.be.empty;
  });

  describe('(Location)', () => {
    it('store should be initialized with Location state', () => {
      const location = {
        pathname: '/echo',
      };
      store.dispatch(actions.changeLocation(location));
      expect(store.getState().location).to.deep.equal(location);
    });
  });
});
