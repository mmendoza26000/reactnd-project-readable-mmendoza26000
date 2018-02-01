import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { addComment } from '../actions';
import uuidv1 from 'uuid/v1';


class CommentAdd extends Component {

    state={
        editing: false,
        bodyString: '',
        authorString: ''
    }

    saveNewComment = () => {
        const { submitNewComment, parentId } = this.props;

        const editedComment = {
            id: uuidv1(),
            timestamp: Date.now(),
            body: this.state.bodyString,
            author: this.state.authorString,
            parentId: parentId
        }
        submitNewComment(editedComment);
        this.setState({
            editing: false,
            bodyString: '',
            authorString: ''
        })
    }

    render(){
        
        const { editing } = this.state;

        
        if( !editing ){
            return(
                <div>
                    <RaisedButton 
                        style={{padding: '20px', align: 'center'}}
                        primary={true} 
                        label='Add new Comment' 
                        onClick={()=> this.setState({editing: true})}
                    />
                </div>
            )
        } else {
            return(
                
                <div className="editcomment">
                    <Divider />
                        Note: new comments have an initial score of 1.
                        <TextField
                            style={{marginTop: '30px'}}
                            fullWidth={true}
                            floatingLabelText="Comment"
                            multiLine={true}
                            rows={1}
                            rowsMax={4}
                            onChange={(e,newValue)=>{
                                this.setState(()=>({
                                    bodyString: newValue
                                }))
                            }}
                        />
                        <TextField
                            style={{marginTop: '30px'}}
                            fullWidth={true}
                            floatingLabelText="Author"
                            rows={1}
                            onChange={(e,newValue)=>{
                                this.setState(()=>({authorString: newValue}))
                            }}
                        />
                        <FlatButton label='Cancel' onClick={()=>this.setState({editing: false})}/>
                        <FlatButton label='Save' onClick={this.saveNewComment} />
                    
                    <div style={{height: '20px'}}></div>
                    <Divider />
                </div>
                
            )
        }

        
    }
}

function mapsStateToProps(state, ownProps){
    return {
        parentId: ownProps.postId
    }
}

function mapDispatchToProps(dispatch){
    return{
        submitNewComment: (newComment) => { dispatch(addComment(newComment)) }
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(CommentAdd);