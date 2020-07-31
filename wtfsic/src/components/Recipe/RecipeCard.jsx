import React from 'react';

import Image from './Image';
import './RecipeCard.style.css';
import { getTotalMinutes } from '../../helpers/durations';

const RecipeCard = ({ recipe }) => {
  const hasImage = !!recipe.images.length;
  const url = hasImage ? recipe.images[0].medium : '';
  const totalCookTime = getTotalMinutes(recipe.prep_time, recipe.cook_time);

  return (
    <div className='card with-shadow'>
      <div className='thumbnail-container'>
        <Image url={url} />
      </div>
      <h3 className='centered'>{recipe.title}</h3>
      <div className='centered'>{totalCookTime} mins</div>
      <p className='centered'>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
