import React from 'react';
import { connect } from 'react-redux';
import { setSortField } from '../actions';
import Chip from 'material-ui/Chip';


import ArrowDropup from 'material-ui/svg-icons/navigation/arrow-drop-up';
import ArrowDropdown from 'material-ui/svg-icons/navigation/arrow-drop-down';




export const SortSelector = ({ sortCriteria, setSortCriteria }) => {

    const order = sortCriteria.orderAsc ? 
                        <ArrowDropup style={{color:'white'}}/> : 
                        <ArrowDropdown style={{color:'white', alignSelf: 'center'}}/>;
    const chipStyle = {backgroundColor: '#00bcd4'}

    return (
        <div className="sortselector-container">
            Sort by: 
                <Chip 
                    labelColor={sortCriteria.field === 'voteScore' ? "white" : "blue"} 
                    className="sort-chip" 
                    style={chipStyle} onClick={()=>setSortCriteria('voteScore')} 
                >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        Score 
                        {sortCriteria.field === 'voteScore' ? order : ''} 
                    </div>
                </Chip>
                
                <Chip 
                    labelColor={sortCriteria.field === 'timestamp' ? "white" : "blue"} 
                    className="sort-chip" 
                    style={chipStyle} onClick={()=>setSortCriteria('timestamp')} 
                >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        Date 
                        {sortCriteria.field === 'timestamp' ? order : ''} 
                    </div>
                </Chip>
        </div>
    );
}

function mapStateToPros({sortCriteria}){
    return {
        sortCriteria
    };
}

function mapDispatchToProps(dispatch){
    return {
        setSortCriteria: (sortField) => dispatch(setSortField(sortField))
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(SortSelector);

