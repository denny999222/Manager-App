import React,{Component} from 'react';
import {View} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit'

class RouterComponent extends Component {
    render(){
        return (
            <Router>
                <Scene key='root' >
                    <Scene
                        key='LoginForm'
                        component={LoginForm}
                        hideNavBar={true}
                        initial
                    />
                    <Scene
                        renderLeftButton={<View/>}
                        title='Employees'
                        key='EmployeeList'
                        component={EmployeeList}
                        rightTitle='+'
                        rightButtonTextStyle={{fontSize:40,}}
                        onRight={ () => Actions.EmployeeCreate()}
                    />
                    <Scene
                        title='Edit Employee'
                        key='EmployeeEdit'
                        component={EmployeeEdit}
                        backTitle=' '
                    />
                    <Scene
                        key='EmployeeCreate'
                        component={EmployeeCreate}
                        title='Add Employee'
                        backTitle=' '
                    />
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent;
