import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import CategorySelector from './CategorySelector';
import ListPosts from './ListPosts';
import { sortBy } from 'lodash';
import SortSelector from './SortSelector';

import AppBar from 'material-ui/AppBar';

const App = ({categories, categoryName, posts}) =>  {

    return (
      <div>
           <AppBar 
              title={categoryName === 'ALL_POSTS'?'All Posts':'Category: '+categoryName}  />

        <CategorySelector categories={categories} />
        <SortSelector />
        <ListPosts posts={posts} />
      </div>
    );
  
}

function mapStateToProps({categories, posts, sortCriteria}, ownProps){
    const categoryName = ownProps.match.params.categoryName || 'ALL_POSTS'
    const filteredPosts = categoryName === 'ALL_POSTS' ? posts : posts.filter( post => post.category === categoryName )
    const orderedPosts = sortCriteria.orderAsc ?
                            sortBy(filteredPosts, [sortCriteria.field]) :
                            sortBy(filteredPosts, [sortCriteria.field]).reverse();
  return {
    categories,
    posts: orderedPosts,
    categoryName
  }
}

export default connect(mapStateToProps)(App);
