import React from 'react';
import PropTypes from 'prop-types';
import FilterLink from './FilterLink';

const CategorySelector = ({categories}) => {

    return (
        <div>
            Select category:
            {' '} <FilterLink filter='ALL_POSTS'>All posts</FilterLink>
            {
                categories.map(
                    category => <FilterLink filter={category.path}>{category.name}</FilterLink>
                )
            }

        </div>
    );

}

CategorySelector.propTypes = {
    categories : PropTypes.array.isRequired
}

export default CategorySelector;