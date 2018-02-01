import { 
    SET_VOTE_SCORE,
    GET_POSTS,
    ADD_POST_FROM_SERVER,
    UPDATE_POST
} from '../actions';




const  posts = (state = [], action) => {
    
    switch(action.type){

        case UPDATE_POST:
            return(
                state.map( post => post.id !== action.post.id ? post : action.post )
            )

        case ADD_POST_FROM_SERVER:
            return([
                ...state,
                action.post
            ])

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