import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* icon */
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
import Home from '../src/Screen/Main/Home/Home';
import User from '../src/Screen/Main/User/User';
import Statistics from '../src/Screen/Main/Statistics/StatisticsView';


const NavigationBottom = () => {
    const Tab = createBottomTabNavigator();
 
    return (
 
 
        <Tab.Navigator initialRouteName="HomeTab"
            tabBarOptions={{
                activeTintColor: '#3249ed',
                inactiveTintColor: '#7f8087',
 
                style: {
                    backgroundColor: "#fff",
                    borderTopColor: 'rgba(225,225,225,0.2)'
                },
 
            }}>
            <Tab.Screen name="Home" options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
 
                    <Icon name="home" color={color} size={size} />
                ),
            }} component={Home} />
             <Tab.Screen name="Statistics" component={Statistics} options={{
                tabBarIcon : ({ color, size }) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome name="bar-chart-o" color={color} size={size} />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Me" options={{
                title: "Me",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="person" color={color} size={size} />
                ),
            }} component={User} />
            
        </Tab.Navigator>
 
 
    )
}
const styles = StyleSheet.create({
})
 
export default NavigationBottom;
