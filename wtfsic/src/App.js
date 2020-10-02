import React, { useState, useEffect } from 'react';

import RecipeLister from './components/Recipe/RecipeLister';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';
import './components/Button.style.css';

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [newRecipePage, setNewRecipePage] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiUrl = '/api/recipes';
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setRecipeList(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>WTF Should I Cook?!</header>
      <div className='App-container'>
        {newRecipePage ? (
          <>
            <AddRecipeForm />
            <button
              className='simple-button'
              onClick={() => setNewRecipePage(false)}
            >
              Back to List
            </button>
          </>
        ) : (
          <>
            <RecipeLister recipes={recipeList} />
            <button
              className='simple-button'
              onClick={() => setNewRecipePage(true)}
            >
              Add
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
