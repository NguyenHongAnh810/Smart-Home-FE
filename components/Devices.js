import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Devices() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Icon name="person" size={16} color="blue"></Icon>
        <Text>Air Conditioner Ánh Ngáo</Text>
        <Text>Voltas RF140</Text>
        <Switch    
          style={styles.switch}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  switch: {},
  button: {
    backgroundColor: 'green'
  }
});
