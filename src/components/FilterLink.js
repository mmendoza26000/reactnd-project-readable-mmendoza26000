import React from 'react'
import Chip from 'material-ui/Chip';
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => {

  

return(
  <Chip className="filterlink-chip" style={{backgroundColor: 'DodgerBlue'}}>
    <NavLink
        to={filter === 'ALL_POSTS' ? '/' : `/${ filter }`}
        activeStyle={ {
          textDecoration: 'none',
          color: 'white'
        }}
      >
        {children}
      </NavLink>
    </Chip>
)
}

export default FilterLink;