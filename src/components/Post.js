import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { votePost, deletePost } from '../actions';
import { ListItem } from 'material-ui/List';
import ScoreDisplay from './ScoreDisplay';
import Divider from 'material-ui/Divider';

import InsertComment from 'material-ui/svg-icons/editor/insert-comment';


import PostMoreMenu from './PostMoreMenu';

const Post = ({post, upVotePost, downVotePost, deletePost}) => {

    const scoreDisplay = <ScoreDisplay 
                                upVotePost={upVotePost}
                                downVotePost={downVotePost}
                                voteScore={post.voteScore}
                                postId={post.id}
                            />



    return(
        <div>
            <Divider/>
            <ListItem  >
                <div className="post-listitem" >
                    
                    {scoreDisplay}
                    <div className="post-infocontainer">
                        <div className="post-title">
                            <Link to={'/'+ post.category + '/' + post.id}>
                                 {post.title}
                            </Link>
                        </div>
                        <div className="post-author">{post.author}</div>
                    </div>
                    <div className="post-commentcontainer">
                        <InsertComment /> {post.commentCount}
                    </div>
                    <div className="post-morevertmenucontainer">
                        <PostMoreMenu postId={post.id} deletePost={deletePost} />
                    </div>
                    
                </div>
            </ListItem>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        upVotePost: (postId) => dispatch(votePost(postId, true)),
        downVotePost: (postId) => dispatch(votePost(postId, false)),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}
//onClick={(post.id) => upVotePost(postId)} 

export default connect( ()=>{return{}}, mapDispatchToProps)(Post);