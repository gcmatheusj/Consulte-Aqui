import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/components/login/Login'
import DrawerMenuHomeScreen from './src/components/home/DrawerMenuHome'
import EntrarScreen from './src/components/entrar/Entrar'
import CadastroClienteScreen from './src/components/cadastro/CadastroPaciente'
<<<<<<< HEAD
import CardiologistaScreen from './src/components/cardiologista/Cardiologista'
import MedicoScreen from './src/components/cardiologista/Medico'
=======
import EletrocardiogramaScreen from './src/components/exames/Eletrocardiograma'
>>>>>>> 847a914b6ceeaacb16455f149cf0304730093423

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
<<<<<<< HEAD
  Cardiologista: CardiologistaScreen,
  Medico: MedicoScreen
=======
  Eletrocardiograma: EletrocardiogramaScreen
  
>>>>>>> 847a914b6ceeaacb16455f149cf0304730093423
},
{
  initialRouteName: 'Login',
  navigationOptions: {
   header: null
  },
  }
)

