import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { upVotePost, downVotePost } from '../actions';
import { ListItem } from 'material-ui/List';
import ScoreDisplay from './ScoreDisplay';
import Divider from 'material-ui/Divider';

import InsertComment from 'material-ui/svg-icons/editor/insert-comment';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import PostMoreMenu from './PostMoreMenu';

const Post = ({post, upVotePost, downVotePost}) => {

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
                        <div className="post-title">{post.title}</div>
                        <div className="post-author">{post.author}</div>
                    </div>
                    <div className="post-commentcontainer">
                        <InsertComment /> {post.commentCount}
                    </div>
                    <div className="post-morevertmenucontainer">
                        <PostMoreMenu />
                    </div>
                    
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