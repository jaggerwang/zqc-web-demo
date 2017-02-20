/**
 * 在球场
 * zaiqiuchang.com
 */

import * as apis from '../apis';
import * as helpers from '../helpers';

export const RESET_OBJECT_CACHE = 'reset_object_cache';
export const CACHE_OBJECTS = 'cache_objects';

export function resetObjectCache() {
  return {
    type: RESET_OBJECT_CACHE,
  };
}

export function cacheObjects({users, userIds, files, fileIds}) {
  let aToO = (objects, objectIds) => {
    let o = objects.reduce((o, v) => {
      o[v.id] = v;
      return o;
    }, {});
    if (objectIds !== undefined) {
      objectIds.forEach(v => {
        if (o[v] === undefined) {
          o[v] = null;
        }
      });
    }
    return o;
  };

  let action = {
    type: CACHE_OBJECTS,
  };
  if (users !== undefined) {
    action.users = aToO(users, userIds);
  }
  if (files !== undefined) {
    action.files = aToO(files, fileIds);
  }

  return action;
}

export function cacheUsers({users, userIds}) {
  return (dispatch, getState) => {
    let ps = [dispatch(cacheObjects({users, userIds}))];

    let avatarIds = [];
    let avatarFiles = [];
    users.filter(v => v !== null).forEach(user => {
      if (user.avatarType == 'custom') {
        avatarIds.push(user.avatarId);
        if (user.avatarFile) {
          avatarFiles.push(user.avatarFile);
          delete user.avatarFile;
        }
      }
    });
    if (avatarFiles.length > 0) {
      ps.push(dispatch(cacheFiles({files: avatarFiles, fileIds: avatarIds})));
    } else {
      ps.push(dispatch(cacheFileByIds({fileIds: avatarIds})));
    }

    return Promise.all(ps)
      .then(() => {
        let {object} = getState();
        return users.map(v => helpers.userFromCache(object, v.id));
      });
  };
}

export function cacheUserByIds({userIds, update = false}) {
  return (dispatch, getState) => {
    let {object} = getState();
    userIds = Array.from(new Set(userIds));
    if (!update) {
      userIds = userIds.filter(v => object.users[v] === undefined);
    }
    if (userIds.length > 0) {
      return apis.userInfos(userIds)
        .then(response => {
          let {data: {users}} = response;
          return dispatch(cacheUsers({users, userIds}));
        });
    } else {
      return [];
    }
  };
}

export function cacheFiles({files, fileIds}) {
  return (dispatch, getState) => {
    let ps = [dispatch(cacheObjects({files, fileIds}))];

    return Promise.all(ps)
      .then(() => {
        let {object} = getState();
        return files.map(v => helpers.fileFromCache(object, v.id));
      });
  };
}

export function cacheFileByIds({fileIds, update = false}) {
  return (dispatch, getState) => {
    let {object} = getState();
    fileIds = Array.from(new Set(fileIds));
    if (!update) {
      fileIds = fileIds.filter(v => object.files[v] === undefined);
    }
    if (fileIds.length > 0) {
      return apis.fileInfos(fileIds)
        .then(response => {
          let {data: {files}} = response;
          return dispatch(cacheFiles({files, fileIds}));
        });
    } else {
      return [];
    }
  };
}
