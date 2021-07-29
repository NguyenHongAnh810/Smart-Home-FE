// import React from 'react';
// import { StyleSheet, Dimensions } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// /* icon */
// import Icon from 'react-native-vector-icons/Ionicons';
 
// import LivingRoom from './../src/Screen/Main/Home/LivingRoom'
// import BedRoom from './../src/Screen/Main/Home/BedRoom'
// import DrawingRoom from './../src/Screen/Main/Home/DrawingRoom'
// import Kitchen from './../src/Screen/Main/Home/Kitchen'


// const NavigationRoom = () => {
//     const Tab = createBottomTabNavigator();
 
//     return (
 
 
//         <Tab.Navigator initialRouteName="HomeTab"
//             tabBarOptions={{
//                 activeTintColor: '#3249ed',
//                 inactiveTintColor: '#7f8087',
 
//                 style: {
//                     backgroundColor: "#fff",
//                     borderTopColor: 'rgba(225,225,225,0.2)'
//                 },
 
//             }}>
//             <Tab.Screen name="LivingRoom" options={{
//                 title: "LivingRoom",
//                 // tabBarIcon: ({ color, size }) => (
 
//                 //     <Icon name="home" color={color} size={size} />
//                 // ),
//             }} component={LivingRoom} />
//             <Tab.Screen name="Kitchen" options={{
//                 title: "Kitchen",
//                 // tabBarIcon: ({ color, size }) => (
//                 //     <Icon name="person" color={color} size={size} />
//                 // ),
//             }} component={Kitchen} />
//             <Tab.Screen name="DrawingRoom" options={{
//                 title: "DrawingRoom",
//                 // tabBarIcon: ({ color, size }) => (
 
//                 //     <Icon name="home" color={color} size={size} />
//                 // ),
//             }} component={DrawingRoom} />
//             <Tab.Screen name="BedRoom" options={{
//                 title: "BedRoom",
//                 // tabBarIcon: ({ color, size }) => (
 
//                 //     <Icon name="home" color={color} size={size} />
//                 // ),
//             }} component={BedRoom} />
//         </Tab.Navigator>
 
 
//     )
// }
// const styles = StyleSheet.create({
// })
 
// export default NavigationRoom;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LivingRoom from './../src/Screen/Main/Home/LivingRoom'
import BedRoom from './../src/Screen/Main/Home/BedRoom'
import { Colors } from '../src/assets/color';

function StatisticsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();

 const NavigationRoom = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 40,
                    right: 40,
                    elevation: 0,
                    backgroundColor: Colors.gray,
                    borderRadius: 16,
                    height: 32,
                    ...styles.shadow,
                },
            }}>
            <Tab.Screen name="LivingRoom" component={LivingRoom} options={{
                tabBarIcon : ({ focused }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        {/* <MaterialCommunityIcons name="sofa" color={focused ? '#407BFF' : '#748c94'} size={20} /> */}
                        <Text style={{ color: focused ? '#407BFF'  : '#748c94', fontSize: 12 }}>LivingRoom</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="BedRoom" component={BedRoom} options={{
                tabBarIcon : ({ focused }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        {/* <Ionicons name="bed" color={focused ? '#407BFF'  : '#748c94'} size={20} /> */}
                        <Text style={{ color: focused ? '#407BFF'  : '#748c94',  fontSize: 12 }}>BedRoom</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#407BFF',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 10,
    },
});

export default NavigationRoom;
