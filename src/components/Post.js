import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { upVotePost, downVotePost } from '../actions';
import { ListItem } from 'material-ui/List';
import ScoreDisplay from './ScoreDisplay';
import Divider from 'material-ui/Divider';

const Post = ({post, upVotePost, downVotePost}) => {

    return(
        <div>
            <Divider/>
            <ListItem  >
                <div className="post-listitem" >
                    <ScoreDisplay 
                        upVotePost={upVotePost}
                        downVotePost={downVotePost}
                        voteScore={post.voteScore}
                        postId={post.id}
                    />
                    {post.title} : {post.category}
                </div>
            </ListItem>
        </div>
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