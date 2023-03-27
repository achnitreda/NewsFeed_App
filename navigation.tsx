import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Feed} from './src/screens/feed';
import {NewsDetails} from './src/screens/NewsDetails';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
