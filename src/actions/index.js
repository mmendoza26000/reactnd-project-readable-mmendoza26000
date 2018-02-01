import { 
    fetchCategories, 
    fetchPosts, 
    changePostVote, 
    addPost,
    saveEditedPost,
    deleteSinglePost
} from '../utils/api';

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
