import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from './reusables';
import {connect} from 'react-redux';
import {employeeUpdate, employeeAdd} from '../actions/EmployeeActions';
import EmployeeInfo from './EmployeeInfo';


class EmployeeCreate extends Component {

    componentDidMount = () => {
        this.props.employeeUpdate({prop:'shift', value:'Monday'})
    }

    render(){
        const {name, phone, shift} = this.props; // state
        const {employeeAdd} = this.props; // action creators
        return (
            <View style={styles.container} >
                <EmployeeInfo {...this.props} />
                <Button
                    title='Save'
                    containerStyle={{borderColor:'#00b4e0', margin:'3%'}}
                    contentStyle={{color:'#00b4e0'}}
                    onPress = {() => employeeAdd({name, phone, shift})}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
});

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employee;
    return {
        name,
        phone,
        shift
    }
}

export default connect(
    mapStateToProps,
    {employeeUpdate, employeeAdd}
    )(EmployeeCreate);
