import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'


import LoginScreen from './src/components/login/Login'
import HomeScreen from './src/components/home/Home'
import EntrarScreen from './src/components/entrar/Entrar'
import CadastroClienteScreen from './src/components/cadastro/CadastroPaciente'

export default class App extends Component {

  render() {
    return (
      <AppStackNavigator/>
    )
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Entrar: EntrarScreen,
  CadastroCli: CadastroClienteScreen
},
{
  initialRouteName: 'Login',
  navigationOptions: {
   header: null
  },
  }
)

