import React from "react";
import RecipeItem from "./RecipeItem"


// Display a list of recipes in a table
function RecipeList({recipes, deleteRecipe}) {
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
            recipes.map((recipe, index) => 
            {               
              return ( <RecipeItem 
                deleteRecipe={() => deleteRecipe(index)} 
                recipe={recipe} 
                key={index} />  
              ) 
            } )
        }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
