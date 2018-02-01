import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import sortCriteria from './sortCriteria';
import initialFetching from './initialFetching';
import currentPostComments from './currentPostComments';

export default combineReducers( { 
    categories,
    posts,
    sortCriteria,
    initialFetching,
    currentPostComments
});

