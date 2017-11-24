import React from 'react';
import PropTypes from 'prop-types';
import FilterLink from './FilterLink';

const CategorySelector = ({categories}) => {

    return (
        <div className="categoryselector-container">
            Select category:
            {' '} <FilterLink key="allPosts" filter='ALL_POSTS'>All posts</FilterLink>
            {
                categories.map(
                    category => <FilterLink key={category.path} filter={category.path}>{category.name}</FilterLink>
                )
            }

        </div>
    );

}

CategorySelector.propTypes = {
    categories : PropTypes.array.isRequired
}

export default CategorySelector;