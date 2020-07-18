import React from 'react';

import RecipeCard from './RecipeCard';

const RecipeLister = ({ recipes }) => {
  if (!recipes || !recipes.length) {
    return <h3>Sorry, there are no recipes to list yet!</h3>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeLister;
