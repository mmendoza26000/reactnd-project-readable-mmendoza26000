import { 
    UP_VOTE_POST, 
    DOWN_VOTE_POST,
    GET_POSTS
} from '../actions';




const  posts = (state = [], action) => {
    
    switch(action.type){

        case UP_VOTE_POST:
            return (
                state.map( post => {
                    if(post.id !== action.postId){
                        return post;
                    } else {
                        return {
                            ...post,
                            voteScore : ++post.voteScore
                        }
                    }
                })
            );

        case DOWN_VOTE_POST:
            return (
                state.map( post => {
                    if(post.id !== action.postId){
                        return post;
                    } else {
                        return {
                            ...post,
                            voteScore : --post.voteScore
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