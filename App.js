import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import HomeScreen from './Home';
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Saved from './components/Saved';
import Notification from './components/Notification';
import Profile from './components/Profile';
import SinglePage from './components/SinglePage';
import RecipeContextProvider from './context/RecipeContextProvider';
import recipeContext from './context/context';
import SearchPage from './components/SearchPage';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <RecipeContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='saved' component={Saved} />
          <Stack.Screen name='notification' component={Notification} />
          <Stack.Screen name='profile' component={Profile} />
          <Stack.Screen name='singlepage' component={SinglePage} options={{title:"Recipe Detail"}}/>
          <Stack.Screen name='search' component={SearchPage} options={{
          title: 'Search Result',
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RecipeContextProvider>


  );
}
