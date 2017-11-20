import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import CategorySelector from './CategorySelector';
import ListPosts from './ListPosts';

const App = ({categories, categoryName, posts}) =>  {

    return (
      <div>
          <h1>Category: {categoryName}</h1>

        <CategorySelector categories={categories} />
        <ListPosts posts={posts} />
      </div>
    );
  
}

function mapStateToProps({categories, posts}, ownProps){
    const categoryName = ownProps.match.params.categoryName
  return {
    categories,
    posts: categoryName === undefined ? posts : posts.filter( post => post.category === categoryName ),
    categoryName
  }
}

export default connect(mapStateToProps)(App);
