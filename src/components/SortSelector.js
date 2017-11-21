import React from 'react';
import { connect } from 'react-redux';
import { setSortField } from '../actions';



export const SortSelector = ({ sortCriteria, setSortCriteria }) => {

    const order = sortCriteria.orderAsc ? '(ASC)' : '(DESC)';

    return (
        <div>
            Sort by: 
                <div onClick={()=>setSortCriteria('voteScore')} >Score {sortCriteria.field === 'voteScore' ? order : ''} </div>
                <div onClick={()=>setSortCriteria('timestamp')} >Date {sortCriteria.field === 'timestamp' ? order : ''} </div>
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

