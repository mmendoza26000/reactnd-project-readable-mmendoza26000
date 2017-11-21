import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import sortCriteria from './sortCriteria';


export default combineReducers( { 
    categories,
    posts,
    sortCriteria
});

