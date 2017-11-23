import React from 'react';
import { connect } from 'react-redux';
import { upVotePost, downVotePost } from '../actions';
import { ListItem } from 'material-ui/List';

const Post = ({post, upVotePost, downVotePost}) => {

    return(
        <li>
            <div onClick={ ()=> upVotePost(post.id) }>++</div>
            {post.voteScore}
            <div onClick={ ()=> downVotePost(post.id) }>--</div>
            {post.title} : {post.category}
        </li>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        upVotePost: (postId) => dispatch(upVotePost(postId)),
        downVotePost: (postId) => dispatch(downVotePost(postId))
    }
}
//onClick={(post.id) => upVotePost(postId)} 

export default connect( ()=>{return{}}, mapDispatchToProps)(Post);