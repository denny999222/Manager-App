import {EMPLOYEES_FETCH_SUCCESS} from '../../actions/EmployeeActions/types';

const INITIAL_STATE = {};

export const EmployeeListReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}