import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import NavigationBottom from '../navigation/NavigationBottom';

const Stack = createStackNavigator();
export default function index() {
    return (
      <NavigationContainer>
          <StatusBar hidden= {true}/>
        <NavigationBottom/>
      </NavigationContainer>
    )
}