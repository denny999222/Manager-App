import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

class Spinner extends Component{

    render(){
        const {size, animating} = this.props;
        return(
            <View style={styles.spinnerStyle} >
                <ActivityIndicator size={size || 'large'}  animating={animating} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    spinnerStyle:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export {Spinner};