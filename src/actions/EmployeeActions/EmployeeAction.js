import
    {EMPLOYEE_UPDATE,
    EMPLOYEE_ADD,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_EDIT,
    EMPLOYEE_FIRE,
    YES_FIRE,
    NO_FIRE}
from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
}

export const employeeAdd = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();

    return async(dispatch) => {
        try{
            await firebase.database().ref(`/users/${currentUser.uid}/employees`).push({name, phone, shift});
            Actions.pop();
            dispatch({type: EMPLOYEE_ADD});
        }catch(error){
            console.log(error);
        }

    }
}

export const employeesFetch = () => {
    const {currentUser} = firebase.auth();

    return async (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
            })
    }
}

export const employeeEditInfo = ({name, phone, shift, id}) => {
    const {currentUser} = firebase.auth();

    return async (dispatch) => {
        try{
            await firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`)
                .set({name, phone, shift});
            Actions.pop();
            dispatch({type: EMPLOYEE_SAVE_EDIT});
        }catch(error){
            console.log(error);
        }
    }
}

export const employeeFire = () => {
    return {
        type: EMPLOYEE_FIRE,
    }
}

export const yesFire = (id) => {
    const {currentUser} = firebase.auth();
    return async (dispatch) => {
        try{
            await firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`).remove();
            Actions.EmployeeList();
            dispatch({type: YES_FIRE});
        }catch(error){

        }
    }
}

export const noFire = () => {
    return {
        type: NO_FIRE
    }
}
