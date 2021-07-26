import React, {useState, useEffect, createContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';

const stack = createStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './components/Loading';
import { View } from 'react-native';

export const StateGlobal = createContext();

const App = () => {
  const [check, setcheck] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const value = JSON.parse(await AsyncStorage.getItem('log'));
    if (value == true) {
      setcheck(true);
    } else {
      setcheck(false);
    }
    setLoading(false);
  }, []);
  console.log(`check`, check);

  if (loading) return <Loading />;

  return (
    <StateGlobal.Provider value={{check, setcheck}}>
      <View style={{flex:1}}>
     {check ?
      <MainStack />
      :
      <AuthStack />} 

      </View>
    </StateGlobal.Provider>
  );
};

export default App;
