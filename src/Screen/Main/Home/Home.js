import React, {useContext, useEffect, UseState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {StateGlobal} from '../../../../App';
import  Icon  from 'react-native-vector-icons/Ionicons';

import NavigationRoom from '../../../../navigation/NavigationRoom';

const Home = props => {
  const {setcheck} = useContext(StateGlobal);
  return (
      <View>
        <View style={{height: 560 }}>
        <NavigationRoom></NavigationRoom>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  logout: {
    height: 50,
    width: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 132,
    marginTop: 450,
  },
});
export default Home;
