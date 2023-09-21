import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {

  // store RecipeData arry in useState
  const [recipes, setRecipes] = useState(RecipeData);

  // define event actions for create and delete
  const createRecipe = (newRecipe) => {

    // add new recipe to end of list, and set state
    const currentRecipes = [...recipes, newRecipe];
    setRecipes(currentRecipes); 
  };
  const deleteRecipe = (indexToDelete) => {

    // remove recipe where not equal to received indexToDelete parameter, and set state
    const currentRecipes = recipes.filter((recipe, index) => index !== indexToDelete);
    setRecipes(currentRecipes); 
  };

  //  build the recipe page
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
