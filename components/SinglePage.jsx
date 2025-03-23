import { Text, View, Image, StyleSheet, SafeAreaView, TextInput, ScrollView, Touchable, TouchableOpacity, Linking } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-native-paper';
import recipeContext from '../context/context';
import CountryFlag from "react-native-country-flag";
import RecipeComponent from './RecipeComponent';
import Instruction from './Instruction';

const SinglePage = () => {
  const { recipe } = useContext(recipeContext)
  const [showRecipe, setShowRecipe] = useState({})
  const [conutry, setCountry] = useState('')
  const [keywords, setKeywords] = useState()

  useEffect(() => {
    console.log(recipe.idMeal)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`)
      .then(response => response.json())
      .then(data => {
        setShowRecipe(data.meals[0]);
        setCountry(data.meals[0].strArea.slice(0, 2));
        setKeywords(data.meals[0].strTags || ""); // Ensure keywords is always a string
      });




  }, [recipe])

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={{ uri: showRecipe.strMealThumb }} style={{ width: 'full', height: 400 }} />
          <View style={{ margin: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', }}>
              {showRecipe.strMeal}
            </Text>

            <View style={{ alignItems: 'baseline' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CountryFlag isoCode={conutry} size={13} />

                <Text style={{ paddingLeft: 5, paddingRight: 15, paddingTop: 5, paddingBottom: 5, borderRadius: 20 }}>{showRecipe.strArea}</Text>
              </View>
            </View>

            <View style={{ alignItems: 'baseline' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                {keywords && (keywords || "").split(',').map((data, index) => (
                  <Text key={index} style={{ backgroundColor: 'lightgreen', marginRight: 5, marginTop: 5, paddingLeft: 20, paddingRight: 20, paddingTop: 5, paddingBottom: 5, borderRadius: 40 }}>
                    {data}
                  </Text>
                ))}
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <View>
                <RecipeComponent meal={showRecipe} />
              </View>
            </View>


            <View style={{ marginTop: 10 }}>
              <View>
                <Instruction meal={showRecipe.strInstructions} />
              </View>
            </View>

            <View style={{ alignItems: 'baseline', flexDirection:'row', alignItems:'center', gap:15 }}>

              <Text style={{marginTop:10, marginBottom:5, fontSize:17, fontWeight:'bold'}}>YouTube Help:</Text>
              <TouchableOpacity onPress={() => Linking.openURL(showRecipe.strYoutube)}>
                <Text  style={{backgroundColor:'#e1002d', color:'white', paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, borderRadius:10}}>Video Guidance</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View></ScrollView></SafeAreaView>
  )
}
export default SinglePage


