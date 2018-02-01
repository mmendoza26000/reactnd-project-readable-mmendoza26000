import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import CategorySelector from './CategorySelector';
import ListPosts from './ListPosts';
import { sortBy } from 'lodash';
import SortSelector from './SortSelector';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const App = ({categories, categoryName, posts, history}) =>  {

    return (
      <div>
           <AppBar 
              title={categoryName === 'ALL_POSTS'?'All Posts':'Category: '+categoryName}  />

        <CategorySelector categories={categories} />
        <SortSelector />
        <RaisedButton 
                            label="Add New Post" 
                            fullWidth={false}
                            primary={true} 
                            style={{ margin: '50px', display: 'block' }}
                            onClick={ () => { history.push('/add/post/' + categoryName ) } }
                        />
        <ListPosts posts={posts} />
      </div>
    );
  
}

function mapStateToProps({categories, posts, sortCriteria}, ownProps){
    const categoryName = ownProps.match.params.categoryName || 'ALL_POSTS'
    const nonDeletedPosts = posts.filter( post => !post.deleted)
    const filteredPosts = categoryName === 'ALL_POSTS' ? nonDeletedPosts : nonDeletedPosts.filter( post => post.category === categoryName )
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
