import React from 'react';
import PropTypes from 'prop-types';

import ArrowDropup from 'material-ui/svg-icons/navigation/arrow-drop-up';
import ArrowDropdown from 'material-ui/svg-icons/navigation/arrow-drop-down';


const ScoreDisplay = ({upVotePost, downVotePost, voteScore, postId}) => 
{
    return(
        <div className="scoredisplay-container">
            <div onClick={ ()=> upVotePost(postId) }><ArrowDropup /></div>
            {voteScore}
            <div onClick={ ()=> downVotePost(postId) }><ArrowDropdown /></div>
        </div>
    )
}

ScoreDisplay.propTypes = {
    upVotePost : PropTypes.func.isRequired,
    downVotePost : PropTypes.func.isRequired,
    voteScore : PropTypes.number.isRequired,
    postId: PropTypes.string.isRequired
}

export default ScoreDisplay;