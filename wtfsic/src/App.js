import React, { useState, useEffect } from 'react';
import './App.css';

import RecipeLister from './components/Recipe/RecipeLister';

function App() {
  const [recipeList, setRecipeList] = useState([]);

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
      <header className='App-header'>WTF Should I Cook?</header>
      <RecipeLister recipes={recipeList} />
    </div>
  );
}

export default App;
