import React, {useContext, useEffect, UseState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

import {StateGlobal} from '../../../../App';


import NavigationRoom from '../../../../navigation/NavigationRoom';
const HEIGHT = Dimensions.get('screen').height;
const Home = props => {
  const {setcheck} = useContext(StateGlobal);
  return (
      <View>
        <View style={{height: HEIGHT - 80 }}>
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
