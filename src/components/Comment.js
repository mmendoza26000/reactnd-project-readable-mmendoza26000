import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Edit from  'material-ui/svg-icons/image/edit';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import { updateComment } from '../actions';


class Comment extends Component {

    state={
        editing: false,
        editedCommment: ''
    }

    saveEditedComment = () => {
        const { comment, submitEditedComment } = this.props;

        const editedComment = {
            id: this.props.comment.id,
            timestamp: Date.now(),
            body: this.state.editedCommment
        }
        this.props.submitEditedComment(editedComment);
        this.setState({
            editing: false,
            editedComment: ''
        })
    }

    render(){
        const { comment } = this.props;
        const { editing, editedComment } = this.state;

        
        if( !editing ){
            return(
                <div>
                    <Divider />
                    <ListItem>
                        {comment.body}
                        <Edit onClick={()=>this.setState({editing: true})} />
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

function mapsStateToProps({}, ownProps){
    return {
        comment: ownProps.comment
    }
}

function mapDispatchToProps(dispatch){
    return{
        submitEditedComment: (editedComment) => { dispatch(updateComment(editedComment)) }
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(Comment);