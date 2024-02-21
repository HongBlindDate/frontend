import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function TermsOfUse({navigation}) {
    return (
        <View>
            <TouchableOpacity
                hitSlop={{bottom: 20, top: 20, left: 30, right: 30 }} style={styles.loginbutton} onPress={() => {navigation.navigate('Join')}}
            />
            <Text>agree</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50, 
        flex: 1,
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginBottom: 10,
        width: 200,
        padding: 5,
    },
    email: {
        flexDirection: "row",
    },
    text: {
        fontSize: 15,
        padding: 5,
        paddingTop: 10,
    },
    loginbutton: {
        marginTop: 10,
        backgroundColor: "cornflowerblue",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
})