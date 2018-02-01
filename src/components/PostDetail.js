import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back.js';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import InsertComment from 'material-ui/svg-icons/editor/insert-comment';
import Divider from 'material-ui/Divider';


import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { votePost, deletePost } from '../actions';
import ScoreDisplay from './ScoreDisplay';
import PostMoreMenu from './PostMoreMenu';
import PostComments from './PostComments';



class PostDetail extends Component {

    state = {

    }

    deletePostAndNavigate = (postId) => {
        
        const { history, categoryName, deletePost } = this.props;
        deletePost(postId);
        history.push('/'+ categoryName);
    }

    render(){

        const { history, post, categoryName, initialFetchingDone,
                upVotePost, downVotePost } = this.props;

        const postExists = post !== undefined;

        const scoreDisplay = postExists && <ScoreDisplay 
            upVotePost={upVotePost}
            downVotePost={downVotePost}
            voteScore={post.voteScore}
            postId={post.id}
         />

        const iconButtonLeft = <IconButton>
                                    <NavigationArrowBack
                                    onClick={(event)=>{
                                        event.preventDefault();
                                        history.push('/' + categoryName);
                                        }
                                    }
                                    />
                                </IconButton>

        

        return(
            <div>
                <AppBar 
                    style={{position:'fixed'}}
                    title="Read..." 
                    iconElementLeft={iconButtonLeft}
                />
                <div style={{height: '100px'}}> </div>

                { !initialFetchingDone && (<div>Fetching...</div>)}
                { initialFetchingDone && !postExists && (
                    <div>
                        <div>The post you requested does not exist!</div>
                        <div>Please verify your URL and/or update your bookmarks.</div>
                    </div>
                )}

                { initialFetchingDone && postExists && (
                <div>
                <Paper className='addpost-paper' zDepth={5} >
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
                            <PostMoreMenu postId={post.id} deletePost={this.deletePostAndNavigate} />
                        </div>
                    
                    </div>
                    <Divider />
                    <div className="post-body">{post.body}</div>
                </Paper>
                <div style={{height: '40px'}}></div>

                    <PostComments post={post}/>

                </div>

                )}

            </div>
        )
    }

}

function mapStateToProps({ posts, initialFetching }, ownProps){
    const postId = ownProps.match.params.postId;
    const categoryName = ownProps.match.params.categoryName;
    const post = posts.filter(post => postId === post.id)

    return({
        postId,
        post: post[0],
        categoryName,
        initialFetchingDone: initialFetching
    })
}

function mapDispatchToProps(dispatch) {
    return {
        upVotePost: (postId) => dispatch(votePost(postId, true)),
        downVotePost: (postId) => dispatch(votePost(postId, false)),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);