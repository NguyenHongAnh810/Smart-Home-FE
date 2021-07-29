import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export const ButtonProfile = ({name}) => {
    return (
        <View>
        <TouchableOpacity style = {styles.Button}>
          <Text>{name}</Text>
          <Icon name = 'right' color='#C0C0C0'></Icon>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Button: {
      height: 44,
      backgroundColor: '#FEFFFE',
      paddingVertical: 12,
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
})
