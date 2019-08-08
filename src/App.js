import React, {Component} from 'react';
import {View, Text, SafeAreaView,StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/RootReducer';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './RouterComponent';


class App extends Component {

  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyDZK6zrIlewrR0tLKNFg65wjLVKHMCAxxI",
      authDomain: "managerudemy-c7c4f.firebaseapp.com",
      databaseURL: "https://managerudemy-c7c4f.firebaseio.com",
      projectId: "managerudemy-c7c4f",
      storageBucket: "",
      messagingSenderId: "475867457399",
      appId: "1:475867457399:web:d84284249c227fb8"
    };
    firebase.initializeApp(firebaseConfig);

  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
      <Provider store={store}>
        <View style={styles.container} >
          <RouterComponent/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});



export default App;
