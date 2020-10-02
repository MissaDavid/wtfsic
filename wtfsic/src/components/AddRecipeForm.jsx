import React from 'react';
import {useForm} from 'react-hook-form';

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json()
}

// Those hard coded values are only for testing purposes
const cleanRecipeData = (formData) => {
     // TODO : check Django session to get user creds
    // https://stackoverflow.com/questions/59524305/how-to-access-django-session-in-react
        formData.author = 1
        formData.ingredients = []
        formData.cook_time = '00:30:00'
        formData.prep_time = '00:10:00'
    return formData
}

 const addRecipe = async (data) => {
    const cleanData = cleanRecipeData(data)
     return await postData('/api/recipes', cleanData)
}


const AddRecipeForm = () => {
    const {register, handleSubmit } = useForm();

    return (
        <form className='recipeForm' onSubmit={handleSubmit(addRecipe)}>
            <h2>New Recipe</h2>

            <label htmlFor='title'>Title</label>
            <input name='title' ref={register({required: true})}/>

            <label htmlFor='description'>Description</label>
            <input name='description' ref={register}/>

            <label htmlFor='instructions'>Step by step instructions</label>
            <textarea name='instructions' ref={register({required: true})}/>

            <input className='submit-button' type='submit'/>
        </form>
    );
};

export default AddRecipeForm;
