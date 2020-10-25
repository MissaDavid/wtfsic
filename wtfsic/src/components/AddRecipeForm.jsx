import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import './AddRecipeForm.style.css';

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

const cleanRecipeData = (formData) => {
    formData.ingredients = formData.ingredients || [];

    // Those hard coded values are only for testing purposes
    // TODO : check Django session to get user creds
    // https://stackoverflow.com/questions/59524305/how-to-access-django-session-in-react
    formData.author = 1;
    formData.cook_time = '00:30:00';
    formData.prep_time = '00:10:00';
    return formData;
}

const addRecipe = async (data) => {
    const cleanData = cleanRecipeData(data);
    return await postData('/api/recipes', cleanData);
}

const AddRecipeForm = () => {
    const { register, control, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients'
    });

    const [units, setUnits] = useState(['units']);
    useEffect(() => {
        const fetchUnits = async () => {
          try {
            const apiUrl = '/api/ingredients';
            // https://www.django-rest-framework.org/api-guide/metadata/#metadata
            const response = await fetch(apiUrl, { method: 'OPTIONS' });
            const { actions } = await response.json();
            setUnits(actions.POST.unit.choices);
          } catch (error) {
            console.log(error);
          }
        };

        fetchUnits();
    }, []);

    return (
        <form className='recipe-form' onSubmit={handleSubmit(addRecipe)}>
            <h2>New Recipe</h2>

            <label htmlFor='title'>Title</label>
            <input name='title' ref={register({required: true})}/>

            <label htmlFor='description'>Description</label>
            <input name='description' ref={register}/>

            {!fields.length ? 'Ingredients' : (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Amount</th>
                            <th>Unit</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {fields.map((ingredient, index) => (
                            <tr key={ingredient.id}>
                                <td>
                                    <input
                                      className='ingredients-input'
                                      name={`ingredients[${index}].ingredient`}
                                      ref={register({required: true})}
                                      defaultValue={ingredient.ingredient}
                                      maxLength='150'
                                    />
                                </td>

                                <td>
                                    <input
                                      className='ingredients-input'
                                      name={`ingredients[${index}].amount`}
                                      type='number'
                                      step='0.1'
                                      max='99999'
                                      min='0' // Max and min used to control input width
                                      ref={register({required: true})}
                                      defaultValue={ingredient.amount}
                                    />
                                </td>

                                <td>
                                    <select
                                      className='ingredients-input'
                                      name={`ingredients[${index}].unit`}
                                      ref={register({required: true})}
                                    >
                                      {units.map(unit => (
                                        <option
                                          key={`ingredient-${index}-${unit.value}`}
                                          value={unit.value}
                                        >
                                          {unit.display_name}
                                        </option>
                                      ))}
                                    </select>
                                </td>

                                <td>
                                    <button
                                        className='ingredients-input'
                                        type='button'
                                        onClick={() => remove(index)}>
                                        -
                                    </button>
                                </td>
                          </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button
                type='button'
                onClick={() => append({ ingredient: '', amount: 0, unit: '' })}
            >
                New Ingredient
            </button>

            <label htmlFor='instructions'>Step by step instructions</label>
            <textarea name='instructions' ref={register({required: true})}/>

            <input className='submit-button' type='submit'/>
        </form>
    );
};

export default AddRecipeForm;
