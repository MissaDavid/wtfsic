import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <ul>
        <li>{recipe.title}</li>
      </ul>
    </div>
  );
};

export default RecipeCard;
