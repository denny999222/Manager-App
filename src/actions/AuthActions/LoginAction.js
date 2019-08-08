import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_LOADING}
from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


export const emailChanged = (emailText) => {
    return {
        type: EMAIL_CHANGED,
        payload: emailText
    }
}

export const passwordChanged = (passwordText) => {
    return {
        type: PASSWORD_CHANGED,
        payload: passwordText
    }
}

export const loginUser = ({email, password}) => {
    return async (dispatch) => {
        dispatch(loginLoading());
        try{
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch( loginSuccess(user) );
        }catch(error){
            console.log("LOGIN ERR :" + error);
            dispatch(loginFailure(error) );
        }
    }
}

export const signupUser = ({email, password}) => {
    return async (dispatch) => {
        dispatch(loginLoading());
        try{
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
            dispatch( signupSuccess(user) );
        }catch(error){
            console.log("SIGNUP ERR :" + error);
            dispatch( signupFailure(error) )
        }
    }
}

const loginLoading = () => {
    return {
        type: LOGIN_LOADING
    }
}

const loginSuccess = (user) => {
    Actions.EmployeeList();
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

const signupSuccess = (user) => {
    Actions.EmployeeList();
    return {
        type: SIGNUP_SUCCESS,
        payload: user
    }
}

const signupFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        payload: error
    }
}
