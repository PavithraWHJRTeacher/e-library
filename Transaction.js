import React , {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Transaction extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Transaction  Screen</Text>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"yellow"
    },
    text:{
        color:"blue",
        fontSize:30
    }
})