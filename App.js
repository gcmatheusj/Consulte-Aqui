import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/components/login/Login'
import DrawerMenuHomeScreen from './src/components/home/DrawerMenuHome'
import EntrarScreen from './src/components/entrar/Entrar'
import CadastroClienteScreen from './src/components/cadastro/CadastroPaciente'
import CardiologistaScreen from './src/components/cardiologista/Cardiologista'
import MedicoScreen from './src/components/cardiologista/Medico'

export default class App extends Component {

  render() {
    return (
      <AppStackNavigator/>
    )
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: DrawerMenuHomeScreen,
  Entrar: EntrarScreen,
  CadastroCli: CadastroClienteScreen,
  Cardiologista: CardiologistaScreen,
  Medico: MedicoScreen
},
{
  initialRouteName: 'Login',
  navigationOptions: {
   header: null
  },
  }
)

