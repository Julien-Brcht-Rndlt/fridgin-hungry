import React from 'react';
import './FilterDisplay.css'

const FilterDisplay = ({title, children}) => {

    return (
        <div className='filter-display'>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default FilterDisplay;