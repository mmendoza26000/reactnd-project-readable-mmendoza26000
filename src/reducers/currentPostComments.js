
import { START_FETCH_COMMENTS, FINISH_FETCH_COMMENTS, UPDATE_COMMENT } from '../actions';  

const currentPostCommentsInitialState = { 
            currentPostId: '', 
            fetchingComments: false,
            comments: []
        }

const currentPostComments = ( state = currentPostCommentsInitialState, action) => {
    switch(action.type){

        case UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map( comment => 
                    comment.id !== action.comment.id ? comment : action.comment
                )
            }

        case START_FETCH_COMMENTS:
            return {
                currentPostId: action.currentPostId, 
                fetchingComments: action.fetchingComments,
                comments: []
            };

        case FINISH_FETCH_COMMENTS:
            return {
                currentPostId: state.currentPostId, 
                fetchingComments: action.fetchingComments,
                comments: action.comments
            }

        default:
            return state;
    }
}

export default currentPostComments;