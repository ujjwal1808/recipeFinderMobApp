import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const RecipeComponent = ({ meal }) => {
  const recipe = meal;

  // Extract all ingredients dynamically
  const ingredients = [];
  for (let i = 1; i <=100; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(ingredient);
    }
  }

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Ingredients:</Text>
      {ingredients.map((ingredient, index) => (
        <Text key={index}>• {ingredient}</Text>
      ))}
    </View>
  );
};

export default RecipeComponent;