import { fetchCategories, fetchPosts } from '../utils/api';

//Posts
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export const upVotePost = postId => {
    return {
        type: UP_VOTE_POST,
        postId
    }
}

export const downVotePost = postId => {
    return {
        type : DOWN_VOTE_POST,
        postId
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


//Fetching
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
