/**
 * 在球场
 * zaiqiuchang.com
 */

export function userFromCache(object, userId) {
  let user = object.users[userId];
  if (!user) {
    console.debug(`user ${userId} not in cache`);
    return null;
  }
  let avatarFile = null;
  if (user.avatarType == 'custom') {
    avatarFile = fileFromCache(object, user.avatarId);
    if (!avatarFile) {
      return null;
    }
  }
  return Object.assign({}, user, {avatarFile});
}

export function fileFromCache(object, fileId) {
  let file = object.files[fileId];
  if (!file) {
    console.debug(`file ${fileId} not in cache`);
    return null;
  }
  return file;
}
