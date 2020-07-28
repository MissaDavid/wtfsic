import React from 'react';

import Image from './Image';
import './RecipeCard.style.css';

const RecipeCard = ({ recipe }) => {
  const hasImage = !!recipe.images.length;
  const url = hasImage ? recipe.images[0].medium : '';

  return (
    <div className='card with-shadow'>
      <div className='thumbnail-container'>
        <Image url={url} />
      </div>
      <h3 className='centered'>{recipe.title}</h3>
      <p className='centered'>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
