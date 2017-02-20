/**
 * 在球场
 * zaiqiuchang.com
 */

import * as actions from '../actions';

const initialState = {
  users: {},
  posts: {},
  postComments: {},
  courts: {},
  files: {},
  userStats: {},
  postStats: {},
  courtStats: {},
  fileStats: {},
};

export default (state = initialState, action) => {
  if (action.type == actions.CACHE_OBJECTS) {
    let newState = Object.assign({}, state);
    for (let [k, v] of Object.entries(action)) {
      if (newState[k] === undefined) {
        continue;
      }
      newState[k] = Object.assign({}, newState[k], v);
    }
    return newState;
  } else if (action.type == actions.POST_LIKED) {
    let {postLike} = action;
    let post = state.posts[postLike.postId];
    let userStats = state.userStats[postLike.userId] || {};
    let postCreatorStats = state.userStats[post.creatorId] || {};
    let postStats = state.postStats[postLike.postId] || {};
    userStats = Object.assign({}, userStats, {
      like: userStats.like > 0 ? userStats.like + 1 : 1,
    });
    postCreatorStats = Object.assign({}, postCreatorStats, {
      liked: postCreatorStats.liked > 0 ? postCreatorStats.liked + 1 : 1,
    });
    postStats = Object.assign({}, postStats, {
      liked: postStats.liked > 0 ? postStats.liked + 1 : 1,
    });
    return {
      ...state,
      userStats: Object.assign({}, state.userStats, {
        [postLike.userId]: userStats,
        [post.creatorId]: postCreatorStats,
      }),
      postStats: Object.assign({}, state.postStats, {
        [postLike.postId]: postStats,
      }),
    };
  } else if (action.type == actions.POST_UNLIKED) {
    let {postLike} = action;
    let post = state.posts[postLike.postId];
    let userStats = state.userStats[postLike.userId] || {};
    let postCreatorStats = state.userStats[post.creatorId] || {};
    let postStats = state.postStats[postLike.postId] || {};
    userStats = Object.assign({}, userStats, {
      like: userStats.like > 0 ? userStats.like - 1 : 0,
    });
    postCreatorStats = Object.assign({}, postCreatorStats, {
      liked: postCreatorStats.liked > 0 ? postCreatorStats.liked - 1 : 0,
    });
    postStats = Object.assign({}, postStats, {
      liked: postStats.liked > 0 ? postStats.liked - 1 : 0,
    });
    return {
      ...state,
      userStats: Object.assign({}, state.userStats, {
        [postLike.userId]: userStats,
        [post.creatorId]: postCreatorStats,
      }),
      postStats: Object.assign({}, state.postStats, {
        [postLike.postId]: postStats,
      }),
    };
  } else if (action.type == actions.POST_COMMENT_CREATED) {
    let {postComment} = action;
    let userStats = state.userStats[postComment.creatorId] || {};
    let postCreatorStats = state.userStats[postComment.post.creatorId] || {};
    let postStats = state.postStats[postComment.postId] || {};
    userStats = Object.assign({}, userStats, {
      comment: userStats.comment > 0 ? userStats.comment + 1 : 1,
    });
    postCreatorStats = Object.assign({}, postCreatorStats, {
      commented: (postCreatorStats.commented > 0 
        ? postCreatorStats.commented + 1 
        : 1
      ),
    });
    postStats = Object.assign({}, postStats, {
      commented: postStats.commented > 0 ? postStats.commented + 1 : 1,
    });
    return {
      ...state,
      userStats: Object.assign({}, state.userStats, {
        [postComment.creatorId]: userStats,
        [postComment.post.creatorId]: postCreatorStats,
      }),
      postStats: Object.assign({}, state.postStats, {
        [postComment.postId]: postStats,
      }),
    };
  } else if (action.type == actions.POST_COMMENT_DELETED) {
    let {postComment} = action;
    let userStats = state.userStats[postComment.creatorId] || {};
    let postCreatorStats = state.userStats[postComment.post.creatorId] || {};
    let postStats = state.postStats[postComment.postId] || {};
    userStats = Object.assign({}, userStats, {
      comment: userStats.comment > 0 ? userStats.comment - 1 : 0,
    });
    postCreatorStats = Object.assign({}, postCreatorStats, {
      commented: (postCreatorStats.commented > 0 
        ? postCreatorStats.commented - 1 
        : 0
      ),
    });
    postStats = Object.assign({}, postStats, {
      commented: postStats.commented > 0 ? postStats.commented - 1 : 0,
    });
    return {
      ...state,
      userStats: Object.assign({}, state.userStats, {
        [postComment.creatorId]: userStats,
        [postComment.post.creatorId]: postCreatorStats,
      }),
      postStats: Object.assign({}, state.postStats, {
        [postComment.postId]: postStats,
      }),
    };
  } else if (action.type == actions.FILE_FAVORED) {
    let {fileFavor} = action;
    let userStats = state.userStats[fileFavor.userId] || {};
    let fileStats = state.fileStats[fileFavor.fileId] || {};
    userStats = Object.assign({}, userStats, {
      favorFile: userStats.favorFile > 0 ? userStats.favorFile + 1 : 1,
    });
    fileStats = Object.assign({}, fileStats, {
      favored: fileStats.favored > 0 ? fileStats.favored + 1 : 1,
    });
    return {
      ...state,
      userStats: Object.assign({}, state.userStats, {
        [fileFavor.userId]: userStats,
      }),
      fileStats: Object.assign({}, state.fileStats, {
        [fileFavor.fileId]: fileStats,
      }),
    };
  } else if (action.type == actions.FILE_UNFAVORED) {
    let {fileFavor} = action;
    let userStats = state.userStats[fileFavor.userId] || {};
    let fileStats = state.fileStats[fileFavor.fileId] || {};
    userStats = Object.assign({}, userStats, {
      favorFile: userStats.favorFile > 0 ? userStats.favorFile - 1 : 0,
    });
    fileStats = Object.assign({}, fileStats, {
      favored: fileStats.favored > 0 ? fileStats.favored - 1 : 0,
    });
    return {
      ...state,
      userStats: Object.assign({}, state.userStats, {
        [fileFavor.userId]: userStats,
      }),
      fileStats: Object.assign({}, state.fileStats, {
        [fileFavor.fileId]: fileStats,
      }),
    };
  } else if (action.type == actions.RESET || 
    action.type == actions.RESET_OBJECT_CACHE) {
    return initialState;
  } else {
    return state;
  }
};
