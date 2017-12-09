

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


// Categories
export const GET_CATEGORIES = 'GET_CATEGORIES';

