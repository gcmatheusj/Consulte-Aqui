import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/components/login/Login'
import DrawerMenuScreen from './src/components/menuDrawer/DrawerMenu'
import EntrarScreen from './src/components/entrar/Entrar'
import CadastroClienteScreen from './src/components/cadastro/CadastroPaciente'
<<<<<<< HEAD
import CardiologistaScreen from './src/components/cardiologista/Cardiologista'
import MedicoScreen from './src/components/cardiologista/Medico'
=======
import EletrocardiogramaScreen from './src/components/exames/Eletrocardiograma'
<<<<<<< HEAD
import HomeScreen from './src/components/home/Home'
=======
>>>>>>> 847a914b6ceeaacb16455f149cf0304730093423
>>>>>>> 2826ea10b7c3bfb16908b9d5937e9a652179d895

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
<<<<<<< HEAD
  Eletrocardiograma: EletrocardiogramaScreen,
  Home: HomeScreen
=======
<<<<<<< HEAD
  Cardiologista: CardiologistaScreen,
  Medico: MedicoScreen
=======
  Eletrocardiograma: EletrocardiogramaScreen
>>>>>>> 2826ea10b7c3bfb16908b9d5937e9a652179d895
  
>>>>>>> 847a914b6ceeaacb16455f149cf0304730093423
},
{
  initialRouteName: 'Login',
  navigationOptions: {
   header: null
  },
  }
)

