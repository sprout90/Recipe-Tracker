import React, { useState } from "react";


// Accept a new recipe into a form. 
// Uses a FormState object to track state across all input fields
// Will call createRecipe() in App.js on submit event
// New recipe added to recipes in UseState
function RecipeCreate({ createRecipe }) {
  
  // define inital form state object 
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // define formData state object
  const [formData, setFormData] = useState({ ...initialFormState });

  // define event handlers for field-level change, and form submit
  const handleChange = ({ target }) => { 
    setFormData({ ...formData, [target.name]: target.value, 
    });  
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  // build the data capture form
  // fields are populated from formData state object
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                id="name" 
                name="name" 
                type="text" 
                onChange={handleChange}
                value={formData.name}
                required={true} />
            </td>
            <td>
              <input 
                  id="cuisine" 
                  name="cuisine" 
                  type="text" 
                  onChange={handleChange}
                  value={formData.cuisine}
                  required={true} />
            </td>
            <td>
              <input 
                  id="photo" 
                  name="photo" 
                  type="text" 
                  onChange={handleChange}
                  value={formData.photo}
                  required={true} />
            </td>
            <td>
              <textarea 
                id="ingredients" 
                name="ingredients" 
                onChange={handleChange}
                value={formData.ingredients}
                required={true} />
            </td>
            <td>
              <textarea 
                id="preparation" 
                name="preparation" 
                onChange={handleChange}
                value={formData.preparation}
                required={true} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
