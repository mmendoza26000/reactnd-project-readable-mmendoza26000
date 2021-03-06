import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Edit from  'material-ui/svg-icons/image/edit';
import Delete from  'material-ui/svg-icons/action/delete';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import { updateComment, deleteComment, voteComment } from '../actions';
import ScoreDisplay from './ScoreDisplay';



class Comment extends Component {

    state={
        editing: false,
        editedCommment: ''
    }

    saveEditedComment = () => {
        const { comment, submitEditedComment } = this.props;

        const editedComment = {
            id: comment.id,
            timestamp: Date.now(),
            body: this.state.editedCommment
        }
        submitEditedComment(editedComment);
        this.setState({
            editing: false,
            editedComment: ''
        })
    }

    render(){
        const { comment, deleteComment, upVote, downVote } = this.props;
        const { editing } = this.state;

        
        if( !editing ){

            const scoreDisplay = <ScoreDisplay 
                                    upVotePost={upVote}
                                    downVotePost={downVote}
                                    voteScore={comment.voteScore}
                                    postId={comment.id}
                                />

            return(
                <div>
                    <Divider />
                    <ListItem>
                        <div className='comment-listitem'>
                            {scoreDisplay}


                            <div className="post-infocontainer">
                                 <div className="post-title">
                                       {comment.body}
                                 </div>
                                <div className="post-author">{comment.author}</div>
                            </div>


                            <Edit onClick={()=>this.setState({editing: true})} />
                            <Delete onClick={() => deleteComment(comment.id)} />
                        </div>
                    </ListItem>
                </div>
            )
        } else {
            return(
                
                <div className="editcomment">
                    <Divider />
                        <TextField
                            defaultValue={comment.body}
                            style={{marginTop: '30px'}}
                            fullWidth={true}
                            floatingLabelText="Edit comment"
                            multiLine={true}
                            rows={1}
                            rowsMax={4}
                            onChange={(e,newValue)=>{
                                this.setState(()=>({
                                    editedCommment: newValue
                                }))
                            }}
                        />
                        <FlatButton label='Cancel' onClick={()=>this.setState({editing: false})}/>
                        <FlatButton label='Save' onClick={this.saveEditedComment} />
                    
                    <div style={{height: '20px'}}></div>
                    <Divider />
                </div>
                
            )
        }

        
    }
}

function mapsStateToProps(state, ownProps){
    return {
        comment: ownProps.comment
    }
}

function mapDispatchToProps(dispatch){
    return{
        submitEditedComment: (editedComment) => { dispatch(updateComment(editedComment)) },
        deleteComment: (commentId) => { dispatch(deleteComment(commentId)) },
        upVote: (commentId) =>  dispatch(voteComment(commentId, true)) ,
        downVote: (commentId) =>  dispatch(voteComment(commentId, false)) 
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(Comment);