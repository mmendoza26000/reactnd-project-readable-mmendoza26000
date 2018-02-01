import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Edit from  'material-ui/svg-icons/image/edit';
import Delete from  'material-ui/svg-icons/action/delete';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import { updateComment, deleteComment } from '../actions';



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
        const { comment, deleteComment } = this.props;
        const { editing } = this.state;

        
        if( !editing ){
            return(
                <div>
                    <Divider />
                    <ListItem>
                        {comment.body}
                        <Edit onClick={()=>this.setState({editing: true})} />
                        <Delete onClick={() => deleteComment(comment.id)} />
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
        deleteComment: (commentId) => { dispatch(deleteComment(commentId)) }
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(Comment);