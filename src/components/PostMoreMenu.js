import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router-dom';

const PostMoreMenu = ({postId, deletePost}) => (
    <IconMenu
      
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem >
        <Link to={'/edit/post/'+postId}>Edit post</Link>
      </MenuItem>
      <MenuItem 
        primaryText="Delete post" 
        onClick={ ()=> deletePost(postId) }  
      />
    </IconMenu>
  );

  PostMoreMenu.propTypes = {
      postId: PropTypes.string.isRequired,
      deletePost: PropTypes.func.isRequired
  }

export default PostMoreMenu;
  