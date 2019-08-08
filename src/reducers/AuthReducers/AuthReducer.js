import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_SUCCESS, 
    SIGNUP_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_FAILURE,
    LOGIN_LOADING} 
from '../../actions/AuthActions/types';

const INITIAL_STATE = {email:'', password:'', user: null, error: null, loading:false};

export const AuthReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload}
        case SIGNUP_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload}
        case LOGIN_FAILURE:
            return {...state, error: action.payload, loading: false}
        case SIGNUP_FAILURE:
            return {...state, error: action.payload, loading: false}
        case LOGIN_LOADING:
            return {...state, loading: true, error: ''}
        default:
            return state;
    }
}