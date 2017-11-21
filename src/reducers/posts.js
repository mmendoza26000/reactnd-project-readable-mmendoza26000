import { UP_VOTE_POST } from '../actions';
import { DOWN_VOTE_POST } from '../actions';


const postsInitialState = [
    {
        "id":"8xf0y6ziyjabvozdd253nd",
        "timestamp":1467166872634,
        "title":"Udacity is the best place to learn React",
        "body":"Everyone says so after all.",
        "author":"thingtwo",
        "category":"react",
        "voteScore":6,
        "deleted":false,
        "commentCount":2
    },
    {
        "id":"6ni6ok3ym7mf1p33lnez",
        "timestamp":1468479767190,
        "title":"Learn Redux in 10 minutes!",
        "body":"Just kidding. It takes more than 10 minutes to learn technology.",
        "author":"thingone",
        "category":"redux",
        "voteScore":-5,
        "deleted":false,
        "commentCount":0
    }
];

const  posts = (state = postsInitialState, action) => {
    
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

        default:
            return state;
    }
}

export default posts;