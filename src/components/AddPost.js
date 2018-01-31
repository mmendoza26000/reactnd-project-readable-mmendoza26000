import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close.js';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import uuidv1 from 'uuid/v1';

import { addNewPost } from '../actions';


import { connect } from 'react-redux';


class AddPost extends Component {

    state = {
        titleString: '',
        authorString: '',
        bodyString: '',
        categoryString: ''
    }

    submitPost = () => {
        const { history, selectedCategory } = this.props;
        let post = {
            id: uuidv1(),
            timestamp: Date.now(),
            title: this.state.titleString,
            body: this.state.bodyString,
            author: this.state.authorString,
            category: selectedCategory === 'ALL_POSTS' ? this.state.categoryString : selectedCategory
        };
        this.props.addNewPost(post);
        history.push('/'+ (selectedCategory==='ALL_POSTS'?'':selectedCategory)) ;
            
    }

    render(){

        const { history, categories, selectedCategory } = this.props;

        const iconButtonLeft = <IconButton>
                                    <NavigationClose
                                    onClick={(event)=>{
                                        event.preventDefault();
                                        history.push('/'+ (selectedCategory==='ALL_POSTS'?'':selectedCategory));
                                        }
                                    }
                                    />
                                </IconButton>

        let disableSubmitBtn = true;

        if(selectedCategory === 'ALL_POSTS'){
            if( this.state.titleString.length > 0 
                && this.state.authorString.length > 0
                && this.state.bodyString.length > 0
                && this.state.categoryString.length > 0    ){
                    disableSubmitBtn = false;
                } else {
                    disableSubmitBtn =true;
                }
            } else {
                if( this.state.titleString.length > 0 
                    && this.state.authorString.length > 0
                    && this.state.bodyString.length > 0 ){
                        disableSubmitBtn = false;
                    } else {
                        disableSubmitBtn =true;
                    }  
            }
        


        return(
            <div>
                <AppBar 
                    style={{position:'fixed'}}
                    title="Add New Post" 
                    iconElementLeft={iconButtonLeft}
                />
                <div style={{height: '100px'}}> </div>

                <Paper className='addquestion-paper' zDepth={5} >

                    <div style={{margin: '30px', padding : '10px'}}>
                        All fields are required:
                        <TextField
                            style={{marginTop: '30px'}}
                            fullWidth={true}
                            
                            floatingLabelText="Title"
                            multiLine={true}
                            rows={1}
                            rowsMax={4}
                            onChange={(e,newValue)=>{
                                this.setState(()=>({titleString: newValue}))
                            }}
                        />

                        <TextField
                            style={{marginTop: '30px'}}
                            fullWidth={true}
                            
                            floatingLabelText="Author"
                            multiLine={true}
                            rows={1}
                            rowsMax={4}
                            onChange={(e,newValue)=>{
                                this.setState(()=>({authorString: newValue}))
                            }}
                        />

                        <TextField
                            style={{marginTop: '30px'}}
                            fullWidth={true}
                            
                            floatingLabelText="Content"
                            multiLine={true}
                            rows={4}
                            rowsMax={8}
                            onChange={(e,newValue)=>{
                                this.setState(()=>({bodyString: newValue}))
                            }}
                        />

                        <SelectField
                                value={ selectedCategory === 'ALL_POSTS'? this.state.categoryString : selectedCategory }
                                floatingLabelText="Category"
                                disabled={ !(selectedCategory === 'ALL_POSTS') }
                                onChange={(event, index, value) => this.setState({categoryString: value})}
                                >
                                { categories.map( (cat, index) => <MenuItem key={index} value={cat.name} primaryText={cat.name} /> ) }
                        </SelectField>

                        <RaisedButton 
                            label="Submit Post" 
                            disabled={disableSubmitBtn}
                            primary={true} 
                            style={{ margin: '30px', display: 'block' }}
                            onClick={ this.submitPost }
                        />
                    </div>
                </Paper>


            </div>
        )
    }

}

function mapStateToProps({ categories }, ownProps){
    return({
        selectedCategory: ownProps.match.params.categoryName,
        categories
    })
}

function mapDispatchToProps( dispatch ){
    return{
        addNewPost: (post) => {dispatch(addNewPost(post))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);