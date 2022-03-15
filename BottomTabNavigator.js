import React , {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Search from "../screens/Search";
import Transaction from "../screens/Transaction";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Transaction" component={TransactionScreen}></Tab.Screen>
                    <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
                </Tab.Navigator>

            </NavigationContainer>
        )
    }
}

                                                                                                                                                                                                                        