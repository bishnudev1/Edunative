import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import Courses from './src/screens/Courses'
import AboutUs from './src/screens/AboutUs'
import Contact from './src/screens/Contact'
import Facts from './src/screens/Facts'
import Loading from './src/screens/Loading'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Courses' component={Courses} />
        <Stack.Screen name='AboutUs' component={AboutUs} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name='Facts' component={Facts} />
        <Stack.Screen name='Loading' component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


