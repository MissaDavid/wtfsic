import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

async function postData(url = '', data = {}) {
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

const cleanRecipeData = (formData) => {
     // TODO : check Django session to get user creds
    // https://stackoverflow.com/questions/59524305/how-to-access-django-session-in-react
        formData.author = 1
        formData.ingredients = []
        formData.cook_time = 30
        formData.prep_time = 10
    return formData
}
const AddRecipeForm = () => {
    const {register, handleSubmit, errors} = useForm();
    // const [unit, setUnit] = useState('unit')

    const addRecipe = async (data) => {
        const cleanData = cleanRecipeData(data)
        const response = await postData('/api/recipes', cleanData)
        console.log(response)
    };
    
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
