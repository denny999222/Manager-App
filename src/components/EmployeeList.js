import React,{Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'firebase';
import {employeesFetch} from '../actions/EmployeeActions';
import {Actions} from 'react-native-router-flux';


class EmployeeList extends Component {

    renderItem = (value) => {
        const employee = value.item;
        return (
            <TouchableOpacity onPress={() => Actions.EmployeeEdit(employee)} >
                <View style={styles.employeeCard} >
                    <Text style={styles.employeeText} >{employee[1].name}</Text>
                    <Text style={styles.employeeText} >{employee[1].shift}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount = () => {
        this.props.employeesFetch();
    }

    render(){
        const {employeeList} = this.props;
        return (
            <View style={styles.container} >
                <FlatList
                    data={employeeList}
                    renderItem = {this.renderItem}
                    keyExtractor = {(employee) => employee[0]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    employeeCard:{
        flexDirection: 'row',
        margin:'3%',
        borderWidth:.2,
        backgroundColor:'grey',
        flex:1,
        justifyContent:'space-between'
    },
    employeeText:{
        padding:'3%',
        fontSize: 18,
        fontWeight:'bold'
    }
});

const mapStateToProps = (state) => {
    const employeeList = state.employeeList;

    if (employeeList !== null && employeeList !== undefined){
      const employees = Object.entries(employeeList);
      return {
          employeeList : employees
      }
    }
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
