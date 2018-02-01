import {GOT_INITIAL_POSTS} from '../actions';

const initialFetching = (state = false, action) => {
    switch(action.type){
        case GOT_INITIAL_POSTS:
            return action.flag;

        default:
            return state;
    }
}

export default initialFetching;