import { Text, View, Image, StyleSheet, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-paper';
import Footer from './Footer'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const HomeScreen = () => {
  const [info, setInfo] = useState([]);
  const [area, setArea] = useState([]);
  const [aData, setAData] = useState('Indian');
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then(response => response.json())
      .then(data => setArea(data.meals));
  }, []);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${aData}`)
      .then(response => response.json())
      .then(data => setInfo(data.meals));
  }, [aData]);

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
    setAData(filter);
  };

  return (
    <View style={{ flex: 1, marginTop: 60 }}>
      <View style={{ flex: 1 }}>
        <SafeAreaView>
          <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
              <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Jhon Doe</Text>
                <Text style={{ opacity: 0.3, fontSize: 15 }}>What are you cooking today?</Text>
              </View>
              <View>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                  source={require("../assets/blank-profile-picture-973460_640.webp")}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 40, alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
              <TextInput
                placeholder='Search Recipe'
                style={{ padding: 13, borderColor: 'gray', borderWidth: 2, borderRadius: 10, opacity: 0.4, width: 240 }}
              />
              <Button
                style={{
                  height: 47, borderWidth: 2, borderRadius: 10, marginLeft: 8, opacity: 0.4, borderColor: 'gray', alignItems: 'center',
                }}
              >🔍</Button>
            </View>
            <View
              style={{
                margin: 20,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 10, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 10,
                backgroundColor: 'white',
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/banner.webp")}
                style={{
                  width: 375,
                  height: 160,
                  borderRadius: 10,
                }}
              />
            </View>

            <Text style={{ alignItems: 'center', marginLeft: 20, marginRight: 20, fontSize: 15, fontWeight: 'bold' }}>Filter</Text>
            <View style={{ flexDirection: 'row', margin: 5 }}>
              <ScrollView horizontal={true} >
                {area.map((data, i) => {
                  const isSelected = selectedFilter === data.strArea;
                  return (
                    <View key={i}>
                      <Button
                        style={{
                          borderWidth: 1,
                          margin: 3,
                          backgroundColor: isSelected === data.setArea ? 'green' : 'white',
                          borderColor: 'green'
                        }}
                        textColor={isSelected === data.setArea ? 'white' : 'green'}
                        onPress={() => handleFilterPress(data.strArea)}
                      >
                        {data.strArea}
                      </Button>
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', overflow: 'hidden', marginLeft: 20 }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Trending Recipe</Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <ScrollView horizontal={true} >
                {info.map((data, i) => (
                  <View key={i} style={{ justifyContent: 'flex-end', alignItems: 'center', borderRadius: 27, marginRight: 10, marginLeft: 10 }}>
                    <Image
                      style={{ width: 175, height: 215, borderRadius: 27 }}
                      source={{ uri: data.strMealThumb }}
                    />
                    <View style={{ width: 175, backgroundColor: 'black', height: 90, position: 'absolute', opacity: 0.6, borderRadius: 27, padding: 10 }}>
                    </View>
                    <View style={{ position: 'absolute' }}>
                      <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: 10 }}>{data.strMeal}</Text>
                      <View style={{ flexDirection: 'row', gap: 50, marginBottom: 20 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>⭐️ 4.1</Text>
                        <Image
                          style={{ width: 20, height: 20, borderRadius: 100 }}
                          source={require("../assets/blank-profile-picture-973460_640.webp")}
                        />
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <Footer data="home" />
    </View >
  );
};

export default HomeScreen;
