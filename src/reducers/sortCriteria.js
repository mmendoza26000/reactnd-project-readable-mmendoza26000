import { SET_SORT_FIELD } from '../actions';

const sortCriteriaInitialState = {
    field: 'voteScore',
    orderAsc: false
};

function sortCriteria(state = sortCriteriaInitialState, action){
    switch(action.type){
        case SET_SORT_FIELD:
            if( state.field === action.sortField ){
                return {
                    ...state,
                    orderAsc: !state.orderAsc
                }
            } else {
                return {
                    field: action.sortField,
                    orderAsc: false
                }
            }
            

        default:
            return state;
    }
}

export default sortCriteria;