import { 
    fetchCategories, 
    fetchPosts, 
    changePostVote, 
    addPost,
    saveEditedPost,
    deleteSinglePost,
    fetchCommentsFromServer,
    updateCommentToServer
} from '../utils/api';


//Comments
export const START_FETCH_COMMENTS = 'START_FETCH_COMMENTS';
export const FINISH_FETCH_COMMENTS = 'FINISH_FETCH_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment = (comment) => {
    
    return dispatch => {
        updateCommentToServer(comment)
            .then( res => 
                dispatch(updateCommentFromServer(res))
            )
    }
}

export const updateCommentFromServer = (comment) => {
    return {
        type: UPDATE_COMMENT,
        comment
    }
}

export const fetchComments = (postId) => {

    return dispatch => {
        dispatch(startFetchComments(postId));
        fetchCommentsFromServer(postId)
            .then( res => {
                dispatch(finishFetchComments(res))
            })
    }
}

export const startFetchComments = (postId) => {
    return {
        type: START_FETCH_COMMENTS,
        currentPostId: postId,
        fetchingComments: true
    }
}

export const finishFetchComments = (comments) => {
    return {
        type: FINISH_FETCH_COMMENTS,
        fetchingComments: false,
        comments
    }
}



//Posts
export const UP_VOTE_POST = 'upVote';
export const DOWN_VOTE_POST = 'downVote';
export const SET_VOTE_SCORE = 'SET_VOTE_SCORE';
export const ADD_POST_FROM_SERVER = 'ADD_POST_FROM_SERVER';
export const UPDATE_POST = 'UPDATE_POST';


export const votePost = (postId, upVoteFlg) => {

    const voteType = upVoteFlg ? UP_VOTE_POST : DOWN_VOTE_POST;

    return dispatch => {
        changePostVote(postId, voteType)
            .then( res => 
                dispatch(setVoteScore(postId, res.voteScore))
            )
    }
}

export const setVoteScore = (postId, voteScore) => {
    return {
        type: SET_VOTE_SCORE,
        postId,
        voteScore
    }
}


//Sorting
export const SET_SORT_FIELD = 'SET_SORT_FIELD';

export const setSortField = sortField => {
    return {
        type: SET_SORT_FIELD,
        sortField
    }
}

//Categories
export const getAllCategories = () => {
    
    return dispatch => {
        fetchCategories().then( result => {
            dispatch(getCategories(result));
        } )
    }
}

export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = newCategories => {
    
    return {
        type: GET_CATEGORIES,
        categories : newCategories
    }
}


//Posts
export const deletePost = (postId) => {
    
    return dispatch => {
        deleteSinglePost(postId)
            .then( result => {
                dispatch(updatePostFromServer(result));
            })
    }
}

export const savePost = (post) => {

    return dispatch => {
        saveEditedPost(post)
            .then(result => {
                dispatch(updatePostFromServer(result));
            })
    }
}

export const updatePostFromServer = (post) => {
    return {
        type: UPDATE_POST,
        post
    }
}

export const addNewPost = (post) => {

    return dispatch => {
        addPost(post)
            .then(result =>{
                dispatch(addPostFromServer(result));
            })
    }
}


export const addPostFromServer = (post) => {
    return {
        type: ADD_POST_FROM_SERVER,
        post
    }
}

export const getAllPosts = () => {
    
    return dispatch => {
        fetchPosts().then( result => {
            dispatch(getPosts(result));
            dispatch(gotInitialPosts());
        } )
    }
}

export const GET_POSTS = 'GET_POSTS';

export const getPosts = newPosts => {
    
    return {
        type: GET_POSTS,
        posts : newPosts
    }
}

export const GOT_INITIAL_POSTS = 'GOT_INITIAL_POSTS';

export const gotInitialPosts = () =>{

    return {
        type: GOT_INITIAL_POSTS,
        flag: true
    }
}
