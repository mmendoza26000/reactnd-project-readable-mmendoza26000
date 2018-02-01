import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router-dom';

const PostMoreMenu = ({postId}) => (
    <IconMenu
      
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem >
        <Link to={'/editPost/'+postId}>Edit post</Link>
      </MenuItem>
      <MenuItem primaryText="Delete post" />
    </IconMenu>
  );

  PostMoreMenu.propTypes = {
      postId: PropTypes.string.isRequired
  }

export default PostMoreMenu;
  