import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import Login from '../src/Screen/Auth/Login'
import Register from '../src/Screen/Auth/Register'

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function index() {
    return (
      <NavigationContainer>
        <StatusBar hidden= {true}/>
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}