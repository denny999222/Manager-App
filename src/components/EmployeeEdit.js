import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {connect} from 'react-redux'
import EmployeeInfo from './EmployeeInfo';
import {Button, Input, Confirm} from './reusables';
import {employeeUpdate, employeeEditInfo, employeeFire, noFire, yesFire} from '../actions/EmployeeActions';
import Communications from 'react-native-communications';


class EmployeeEdit extends Component {

    componentDidMount = () => {
        const {name, phone, shift} = this.props.data[1]; //this is the props passed from router
        const {employeeUpdate} = this.props; // the action that was passed as props with connect

        employeeUpdate({prop: 'name', value: name});
        employeeUpdate({prop: 'phone', value: phone});
        employeeUpdate({prop: 'shift', value: shift});
    }

    textEmployee = (text) => {
        const {phone} = this.props;
        Communications.text(phone, text);
    }

    render(){
        const {name, phone, shift, text, confirm} = this.props;
        const id = this.props.data[0];
        const {employeeEditInfo, employeeUpdate} = this.props;
        return (
            <View style={styles.container} >
                <EmployeeInfo {...this.props} />
                <Button
                    title='Save Changes'
                    containerStyle={{borderColor:'#00b4e0', margin:'3%'}}
                    contentStyle={{color:'#00b4e0'}}
                    onPress = {() => employeeEditInfo({name, phone, shift, id})}
                />
                <Input
                    title='Message'
                    placeholder='Enter message'
                    textSize={16}
                    value={text}
                    onChangeText = { (text) => employeeUpdate({prop:'text', value: text})}
                />
                <Button
                    title='Text'
                    containerStyle={{borderColor:'green', margin:'3%'}}
                    contentStyle={{color:'green'}}
                    onPress = {() => this.textEmployee(text)}
                />
                <Button
                    title='Fire'
                    containerStyle={{borderColor:'red', margin:'3%'}}
                    contentStyle={{color:'red'}}
                    onPress = {this.props.employeeFire}
                />
                <Confirm
                    text="Are you sure?"
                    visible = {confirm}
                    onAccept = {() => this.props.yesFire(id)}
                    onDecline = {this.props.noFire}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

const mapStateToProps = (state) => {
    const {name, phone, shift, text, confirm} = state.employee;
    console.log(state.employee);
    return {
        name,
        phone,
        shift,
        text,
        confirm
    }
}

export default connect(mapStateToProps, {employeeUpdate, employeeEditInfo, employeeFire, noFire, yesFire})(EmployeeEdit);
