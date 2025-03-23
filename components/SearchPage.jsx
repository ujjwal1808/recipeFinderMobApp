import React, { useContext } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import recipeContext from '../context/context'
import { useNavigation } from '@react-navigation/native';

const SearchPage = () => {
    const navigation = useNavigation();
    const {recipetitle, setRecipe} = useContext(recipeContext)
    

    function handle(data) {
        setRecipe(data)
        navigation.navigate('singlepage')
    
      }
  return (
   <>
   <SafeAreaView>
             <ScrollView>
   <View style={{padding:10}}>
    <Text>
        {recipetitle.meals.map((data,i)=>(
            <TouchableOpacity style={{width:'100%'}} onPress={()=>handle(data)}>
            <View key={i}  style={{gap:21 ,alignItems:'center', flexDirection:'row', width:'100%', borderRadius:20, padding:20, borderWidth:2 ,borderColor: "green"}}>
                <Image source={{uri:data.strMealThumb}} width={40} height={40} style={{ width: 50, height: 50, borderRadius: 5, marginRight: 10 }}/>
                <Text style={{ fontSize: 16, color: "black", flexShrink: 1 }}>
                {data.strMeal} 
              </Text>
            </View>
            <Text>
                {"\n"}
            </Text>
            </TouchableOpacity>
            
        ))}
    </Text>
   </View>
   </ScrollView>
   </SafeAreaView>
   </>
  )
}

export default SearchPage