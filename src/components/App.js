import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import CategorySelector from './CategorySelector';
import ListPosts from './ListPosts';
import { sortBy } from 'lodash';
import SortSelector from './SortSelector';

const App = ({categories, categoryName, posts}) =>  {

    return (
      <div>
          <h1>Category: {categoryName}</h1>

        <CategorySelector categories={categories} />
        <SortSelector />
        <ListPosts posts={posts} />
      </div>
    );
  
}

function mapStateToProps({categories, posts, sortCriteria}, ownProps){
    const categoryName = ownProps.match.params.categoryName
    const filteredPosts = categoryName === undefined ? posts : posts.filter( post => post.category === categoryName )
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
