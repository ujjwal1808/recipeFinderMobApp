import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import HomeScreen from './Home';
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Saved from './components/Saved';
import Notification from './components/Notification';
import Profile from './components/Profile';

const Stack =createNativeStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>

        <Stack.Screen name='home' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='saved' component={Saved}  />
        <Stack.Screen name='notification' component={Notification}  />
        <Stack.Screen name='profile' component={Profile}  />
      </Stack.Navigator>
   </NavigationContainer>
      
    
  );
}
