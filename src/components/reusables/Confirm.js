// takes in props {text, visible, onAccept, onDecline}
// text : the text that will be displayed (usually a question like "Are you sure?")
// visible : tells the popup whether it should show up or not
// onAccept : the function called for when the user clicks Yes
// onDecline: the function called for when user clicks no


import React,{Component} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {Button} from './Button';

class Confirm extends Component{

    render(){
        const {text, visible, onAccept, onDecline} = this.props;
        return(
            <Modal
                animationType="slide"
                transparent
                visible={visible}
            >
                <View style={styles.container} >
                    <View>
                        <Text style={styles.text} > {text} </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center'}} >
                        <Button
                            title='Yes'
                            onPress={onAccept}
                            contentStyle={{color:'white'}}
                            containerStyle={{backgroundColor:'green', flex:1}}
                        />
                        <Button
                            title='No'
                            onPress={onDecline}
                            contentStyle={{color:'white'}}
                            containerStyle={{backgroundColor:'red', flex:1}}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:.3,
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        justifyContent:'center',
        position:'relative'
    },
    text:{
        fontSize:25,
        textAlign:'center',
        margin:'5%',
        fontWeight:'bold',
        color:'white',
    },
});

export {Confirm};
