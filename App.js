import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/components/login/Login'
import DrawerMenuScreen from './src/components/menuDrawer/DrawerMenu'
import EntrarScreen from './src/components/entrar/Entrar'
import CadastroClienteScreen from './src/components/cadastro/CadastroPaciente'
import EletrocardiogramaScreen from './src/components/exames/Eletrocardiograma'
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
  MenuDrawer: DrawerMenuScreen,
  Entrar: EntrarScreen,
  CadastroCli: CadastroClienteScreen,
  Eletrocardiograma: EletrocardiogramaScreen,
  Home: HomeScreen
  
},
{
  initialRouteName: 'Login',
  navigationOptions: {
   header: null
  },
  }
)

