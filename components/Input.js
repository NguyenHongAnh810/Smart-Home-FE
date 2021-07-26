import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';


const Input = ({title="", pass=false, placeholder="",range, onChange, err="", onEndEditing, types}) => {
  const renderErrMsg= ()=>{
    if(err) return <Text style={styles.errorMsg}>{err}</Text>
    return

  }
  return (
    <View style={styles.contrain}>
      <Text style={[styles.text, { marginTop: range}]}>{title}</Text>
      <TextInput
        types= {types}
        style={styles.button}
        secureTextEntry={pass}
        // value={value}
        placeholder={placeholder}
        onChangeText={(value)=>onChange && onChange(value)}
        onEndEditing={(e)=>onEndEditing && onEndEditing()}
        >
        </TextInput>
        {renderErrMsg()}
    </View>
  );
};


const styles = StyleSheet.create({
  contrain: {},
  button: {
    backgroundColor: '#f8f8ff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    marginVertical: 10
  },
  text: {
    fontWeight: 'bold',
    color: '#f8f8ff',
  },
  errorMsg: {
    color: 'red',
    fontSize: 10,
},
});

export default Input;
