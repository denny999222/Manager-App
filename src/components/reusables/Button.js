//takes in props {containerStyle, contentStyle, title, onPress}

import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Button extends Component{
    render(){
        const {containerStyle, contentStyle, title, onPress} = this.props;
        return(
            <TouchableOpacity
                style={[styles.container, containerStyle]}
                onPress={onPress}
            >
                <Text style={[styles.textStyle, contentStyle]}> {title} </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
       borderWidth:1
    },
    textStyle:{
        padding:'6%',
        fontSize:20,
        textAlign:'center'
    }
});

export {Button};
