import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const ListPosts = ({posts}) => {

    return (
        <ul>
            { posts.map( post => <Post post={post} /> ) }
        </ul>
    );
}

ListPosts.propTypes = {
    posts : PropTypes.array.isRequired
}

export default ListPosts;