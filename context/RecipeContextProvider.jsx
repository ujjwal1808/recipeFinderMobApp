import React, { useState, useEffect, Children } from 'react'
import recipeContext from './context'


const RecipeContextProvider = ({children}) => {
    const [recipe, setRecipe] = useState(0)
    const [recipetitle, setRecipeTitle] = useState('')
  return (
    <recipeContext.Provider value={{recipe, setRecipe, recipetitle, setRecipeTitle}}>
        {children}
    </recipeContext.Provider>
  )
}

export default RecipeContextProvider