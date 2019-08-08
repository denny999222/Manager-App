//takes in props {title, secureTextEntry, placeholder, onChangeText, textSize, value, containerStyle}

import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Input extends Component{
    render(){
        const {title, secureTextEntry, placeholder, onChangeText, textSize, value, containerStyle,} = this.props;
        return(
            <View style={[styles.container, containerStyle]} >
                <Text style={[styles.title, {fontSize:textSize}]} >{title}</Text>
                <TextInput
                    autoCorrect={false}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    style={[styles.input, {fontSize:textSize}]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginRight:'10%',
        marginLeft:'10%',
        borderBottomWidth:.2,
        alignItems:'center',
    },
    title:{
        marginRight:'5%',
        marginBottom:'3%',
        flex:1,
    },
    input:{
        marginBottom:'3%',
        marginRight:'3%',
        flex:3,
        flexWrap:'wrap',
    }
});

export {Input};
