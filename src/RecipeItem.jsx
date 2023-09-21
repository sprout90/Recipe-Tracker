import React from "react";
import "./App.css"

// display a single recipe row with a delete button
function RecipeItem({deleteRecipe, recipe}) {

 
    // recipe object passed in as prop and used to set values in the row.
    return (
        <>
            <tr>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} alt={recipe.name} ></img></td>
                <td className="content_td"><p>{(recipe.ingredients)}</p></td>
                <td className="content_td"><p>{(recipe.preparation)}</p></td>
                <td>
                    <button name="delete" onClick={deleteRecipe}>
                    Delete
                    </button>
                </td>
            </tr>
        </>
      );
  
}

export default RecipeItem;