import React, { useState} from 'react';
import IngredientFilter from '../Filters/IngredientFilter'
import CalorieFilter from '../Filters/CalorieFilter'
import AllergiesFilter from '../Filters/AllergiesFilter'
import RecipeCards from '../RecipeCards/RecipeCards'

const RecipeResults = () => {
    const [searchResults, setSearchResults] = useState([])

    return (
        <div>
              <CalorieFilter setSearchResults={setSearchResults} />
                <IngredientFilter setSearchResults={setSearchResults}/>
                <AllergiesFilter />
                <RecipeCards searchResults={searchResults} />
        
        </div>
    );
};

export default RecipeResults;