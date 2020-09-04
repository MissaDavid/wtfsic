import React from 'react';
import { useForm } from 'react-hook-form';

const AddRecipeForm = () => {
  const { register, handleSubmit } = useForm();
  const addRecipe = (data) => {
    console.log(data);
  };
  return (
    <form className='recipeForm' onSubmit={handleSubmit(addRecipe)}>
      <h2>New Recipe</h2>

      <label htmlFor='title'>Title</label>
      <input name='title' ref={register({ required: true })} />

      <label htmlFor='description'>Description</label>
      <input name='description' ref={register} />

      <label htmlFor='instructions'>Step by step instructions</label>
      <textarea name='instructions' ref={register({ required: true })} />

      <input className='submit-button' type='submit' />
    </form>
  );
};

export default AddRecipeForm;
