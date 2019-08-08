import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_ADD,
    EMPLOYEE_SAVE_EDIT,
    EMPLOYEE_FIRE,
    YES_FIRE,
    NO_FIRE}
from '../../actions/EmployeeActions/types'

const INITIAL_STATE = {name:'', phone: '', shift:'', text:'', confirm: false};

export const EmployeeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_ADD:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_EDIT:
            return INITIAL_STATE;
        case EMPLOYEE_FIRE:
            return {...state, confirm: true}
        case YES_FIRE:
            return {...state, confirm: false}
        case NO_FIRE:
            return {...state, confirm: false}
        default:
            return state;
    }
}
