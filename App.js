import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/components/login/Login'
import HomeScreen from './src/components/home/Home'

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
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#00CAC9',
      },
    }
  }
)

