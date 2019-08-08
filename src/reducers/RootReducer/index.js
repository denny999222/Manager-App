import {combineReducers} from 'redux';
import {AuthReducer} from '../AuthReducers/AuthReducer';
import {EmployeeReducer} from '../EmployeeReducers/EmployeeReducer';
import {EmployeeListReducer} from '../EmployeeListReducer/EmployeeListReducer'

export default combineReducers({
    auth: AuthReducer,
    employee: EmployeeReducer,
    employeeList: EmployeeListReducer
});