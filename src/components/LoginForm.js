import React, {Component} from 'react';
import {View, Text, StyleSheet,SafeAreaView} from 'react-native';
import {Spinner, Input, Button} from './reusables';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser, signupUser} from '../actions/AuthActions';
 
class LoginForm extends Component{

    renderError = () => {
        const {error} = this.props;
        if (error !== null){
            return (
                <View> 
                    <Text style={styles.errorText} > {error.code} </Text>
                    <Text style={styles.errorText} > {error.message} </Text>
                </View>
            )
        }
    }

    renderButtons = () => {
        const {loading, email, password} = this.props;//state
        const {loginUser, signupUser} = this.props;
        if (loading){
            return (
                <Spinner />
            )
        }else{
            return(
                <View style={{flexDirection:'row'}} >
                    <Button 
                        title='Login' 
                        containerStyle={{borderColor:'green'}}
                        contentStyle={{color:'green'}} 
                        onPress={() => loginUser({email, password})}
                    />
                    <Button 
                        title='Sign Up' 
                        containerStyle={{borderColor:'red'}} 
                        contentStyle={{color:'red'}} 
                        onPress= {() => signupUser({email, password})}
                    />
                </View>
            )
        }
    }

    render(){
        const {email,password} = this.props; // the state
        const {emailChanged, passwordChanged} = this.props; //action creators
        return(
            <SafeAreaView style={styles.container} >
                <Input 
                    title='Email'
                    placeholder='example@gmail.com' 
                    textSize={17}
                    value = {email}
                    onChangeText = {(text) => emailChanged(text)}
                />
                <Input
                    title='Password'
                    placeholder='Enter password'
                    secureTextEntry
                    textSize={17}
                    value={password}
                    onChangeText= {(text) => passwordChanged(text)}
                />
                {this.renderError()}
                {this.renderButtons()}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    errorText : {
        color:'red',
        textAlign:'center',
        fontSize:14
    }
});


const mapStateToProps = (state) => {
    const {email, password, error, loading} = state.auth;
    return{
        email,
        password,
        error,
        loading
    }
}

export default connect(
    mapStateToProps, 
    {emailChanged, passwordChanged, loginUser, signupUser},
    )(LoginForm);