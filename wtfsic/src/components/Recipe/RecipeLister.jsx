import React from 'react';

import RecipeCard from './RecipeCard';
import './RecipeLister.style.css';

const RecipeLister = ({ recipes }) => {
  if (!recipes || !recipes.length) {
    return (
      <div className='no-result'>
        <h3>Sorry, there are no recipes to list yet!</h3>
      </div>
    );
  }

  return (
    <div className='recipe-lister'>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeLister;
