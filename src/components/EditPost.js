import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close.js';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { savePost } from '../actions';


import { connect } from 'react-redux';


class EditPost extends Component {

    state = {
        titleString: '',
        bodyString: '',
        titleEdited: false,
        bodyEdited: false
    }

    savePost = () => {
        const { history, post } = this.props;

        const newTitle = this.state.titleEdited ? this.state.titleString : post.title;
        const newBody = this.state.bodyEdited ? this.state.bodyString : post.body;

        let editedPost = {
            id: post.id,
            title: newTitle,
            body: newBody
        };
        this.props.savePost(editedPost);
        history.goBack();
            
    }

    render(){

        const { history, post } = this.props;

        const iconButtonLeft = <IconButton>
                                    <NavigationClose
                                    onClick={(event)=>{
                                        event.preventDefault();
                                        history.goBack();
                                        }
                                    }
                                    />
                                </IconButton>

        let disableSubmitBtn = true;
            if( (this.state.titleString.length > 0 
                && this.state.bodyString.length > 0)
                || this.state.titleEdited || this.state.bodyEdited ){
                    disableSubmitBtn = false;
                } else {
                    disableSubmitBtn =true;
                }  

        


        return(
            <div>
                <AppBar 
                    style={{position:'fixed'}}
                    title="Edit Post" 
                    iconElementLeft={iconButtonLeft}
                />
                <div style={{height: '100px'}}> </div>

                <Paper className='addpost-paper' zDepth={5} >

                    <div style={{margin: '30px', padding : '10px'}}>
                        
                        <TextField
                            defaultValue={post.title}
                            style={{marginTop: '30px'}}
                            fullWidth={true}
                            floatingLabelText="Title"
                            multiLine={true}
                            rows={1}
                            rowsMax={4}
                            onChange={(e,newValue)=>{
                                this.setState(()=>({
                                    titleString: newValue,
                                    titleEdited: true
                                }))
                            }}
                        />

                        <TextField
                            disabled={true}
                            defaultValue={post.author}
                            style={{marginTop: '30px'}}
                            fullWidth={true}
                            floatingLabelText="Author"
                            multiLine={true}
                            rows={1}
                            rowsMax={4}
                        />

                        <TextField
                            style={{marginTop: '30px'}}
                            fullWidth={true}
                            defaultValue={post.body}
                            floatingLabelText="Content"
                            multiLine={true}
                            rows={4}
                            rowsMax={8}
                            onChange={(e,newValue)=>{
                                this.setState(()=>({
                                    bodyString: newValue,
                                    bodyEdited: true
                                }))
                            }}
                        />

                        <SelectField
                                value={post.category}
                                floatingLabelText="Category"
                                disabled={true}
                                >
                                <MenuItem key={post.category} value={post.category} primaryText={post.category} />
                        </SelectField>

                        <RaisedButton 
                            label="Save Post" 
                            disabled={disableSubmitBtn}
                            primary={true} 
                            style={{ margin: '30px', display: 'block' }}
                            onClick={ this.savePost }
                        />
                    </div>
                </Paper>


            </div>
        )
    }

}

function mapStateToProps({ posts }, ownProps){
    const postId = ownProps.match.params.postId;
    const post = posts.filter(post => postId === post.id)

    return({
        postId,
        post: post[0]
    })
}

function mapDispatchToProps( dispatch ){
    return{
        savePost: (post) => {dispatch(savePost(post))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);