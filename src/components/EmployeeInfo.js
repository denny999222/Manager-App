import React,{Component} from 'react';
import {View, StyleSheet, Picker, Text} from 'react-native';
import {Input, Button} from './reusables';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions/EmployeeActions';


class EmployeeInfo extends Component {

    render(){
        const {name, phone, shift} = this.props; // state
        const {employeeUpdate} = this.props; // action creators
        return (
            <View>
                <Input
                    title='Name'
                    placeholder='Denny'
                    textSize={16}
                    value={name}
                    onChangeText = { (text) => employeeUpdate({prop:'name', value: text})}
                />
                <Input
                    title='Phone #'
                    placeholder='5-555-555'
                    textSize={16}
                    value={phone}
                    onChangeText = { (text) => employeeUpdate({prop:'phone', value: text})}
                />
                <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold', marginTop:'5%'}}> Shift </Text>
                <Picker
                    style={{justifyContent:'center'}}
                    selectedValue={this.props.shift}
                    onValueChange = { (day) => (employeeUpdate({prop:'shift', value: day}))}
                >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Satuday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
    },
});

export default connect(
    null,
    {employeeUpdate}
  )(EmployeeInfo);
