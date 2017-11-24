import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

import {List} from 'material-ui/List';

const ListPosts = ({posts}) => {

    return (
        <List>
            { posts.map( post => <Post post={post} /> ) }
        </List>
    );
}

ListPosts.propTypes = {
    posts : PropTypes.array.isRequired
}

export default ListPosts;