import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';
import Comment from './Comment';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import CommentAdd from './CommentAdd';

class PostComments extends Component {


    componentDidMount(){
        this.props.fetchComments(this.props.post.id);
    }

    render(){
        const { post, comments, fetchingComments } = this.props;
        return(
            <Paper className='addpost-paper' zDepth={5} >
                Comments ({post.commentCount} total):
                <CommentAdd postId={post.id} />
                <List>
                    { !fetchingComments && 
                        comments.map(comment => <Comment key={comment.id} comment={comment} /> )}
                </List>

            </Paper>
        )
    }

}

function mapStateToProps( { currentPostComments }, ownProps){
    return {
        comments: currentPostComments.comments,
        fetchingComments: currentPostComments.fetchingComments,
        post: ownProps.post
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        fetchComments: (postId) => { dispatch(fetchComments(postId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);