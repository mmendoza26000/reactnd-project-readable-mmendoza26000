import { 
    SET_VOTE_SCORE,
    GET_POSTS
} from '../actions';




const  posts = (state = [], action) => {
    
    switch(action.type){

        case SET_VOTE_SCORE:
            return (
                state.map( post => {
                    if(post.id !== action.postId){
                        return post;
                    } else {
                        return {
                            ...post,
                            voteScore : action.voteScore
                        }
                    }
                })
            );

        case GET_POSTS:
            return (
                [
                    ...state,
                    ...action.posts
                ]
            )

        default:
            return state;
    }
}

export default posts;