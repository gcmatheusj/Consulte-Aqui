import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import * as firebase from 'firebase'

import LoginScreen from './src/components/login/Login'
import HomeScreen from './src/components/home/Home'

const firebaseConfig = {
  apiKey: "AIzaSyC7K4Thh7Cv-wx4--kU4J1z8yxW5EH4Eyc",
  authDomain: "consulte-aqui.firebaseapp.com",
  databaseURL: "https://consulte-aqui.firebaseio.com",
  projectId: "consulte-aqui",
  storageBucket: "consulte-aqui.appspot.com",
}

firebase.initializeApp(firebaseConfig);

export default class App extends Component {

  render() {
    return (
      <AppStackNavigator/>
    )
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
},
{
  initialRouteName: 'Login',
  navigationOptions: {
   header: null
  },
  }
)

