// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import ExerciseList from '@screens/ExerciseList';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ExerciseList" component={ExerciseList} />
    </Stack.Navigator>
  );
};

export default Routes;
