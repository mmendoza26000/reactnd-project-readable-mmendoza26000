import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close.js';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { connect } from 'react-redux';


class PostDetail extends Component {

    state = {

    }


    render(){

        const { history, postId, post, categoryName } = this.props;

        const iconButtonLeft = <IconButton>
                                    <NavigationClose
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

                <div>PostDetail!! -- {post.title}</div>

            </div>
        )
    }

}

function mapStateToProps({ posts }, ownProps){
    const postId = ownProps.match.params.postId;
    const categoryName = ownProps.match.params.categoryName;
    console.log(posts);
    const post = posts.filter(post => postId === post.id)

    return({
        postId,
        post: post[0],
        categoryName
    })
}

function mapDispatchToProps( dispatch ){
    return{
        
    }
}

export default connect(mapStateToProps)(PostDetail);