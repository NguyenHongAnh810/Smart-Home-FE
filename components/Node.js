import React, {useState} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const Pass = ({nameNode, checkLogin}) => {
    return(
        <View>
        <TouchableOpacity style = {styles.button} onPress = {
                (e)=>checkLogin && checkLogin()
            }>
            <Text style = {styles.text}>{nameNode}</Text>
        </TouchableOpacity>
     </View>
    )
     
}

const styles = StyleSheet.create({
    contrain: {
        flex: 1
    },
    button:{
        borderRadius: 10,
        marginVertical: 20,
        height: 44,
        marginTop: 40,
        backgroundColor: 'black'
    },
    text:{
        fontWeight: "bold",
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 16,
        color: '#f8f8ff'
    }
})

export default Pass