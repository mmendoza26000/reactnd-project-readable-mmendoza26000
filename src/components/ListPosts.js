import React from 'react';
import PropTypes from 'prop-types';

const ListPosts = ({posts}) => {

    return (
        <ul>
            { posts.map( post => <li>++{post.voteScore}--{post.title} : {post.category}</li> ) }
        </ul>
    );
}

ListPosts.propTypes = {
    posts : PropTypes.array.isRequired
}

export default ListPosts;