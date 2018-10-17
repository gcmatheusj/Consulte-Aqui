import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/components/login/Login'
import DrawerMenuScreen from './src/components/menuDrawer/DrawerMenu'
import EntrarScreen from './src/components/entrar/Entrar'
import CadastroClienteScreen from './src/components/cadastro/CadastroPaciente'
import CardiologistaScreen from './src/components/cardiologista/Cardiologista'
import MedicoScreen from './src/components/cardiologista/Medico'
import EletrocardiogramaScreen from './src/components/exames/Eletrocardiograma'
import HomeScreen from './src/components/home/Home'
import AgendaExameScreen from './src/components/exames/agendarExame'
import DadosConsultaScreen from './src/components/cardiologista/dadosConsulta'
import DadosExameScreen from './src/components/exames/dadosExame'
import confirmaConsultaScreen from './src/components/cardiologista/confirmacaoConsulta'
import confirmaExameScreen from './src/components/exames/confirmacaoExame'

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
  Home: HomeScreen,
  Cardiologista: CardiologistaScreen,
  Medico: MedicoScreen,
  AgendaExame: AgendaExameScreen,
  DadosConsulta: DadosConsultaScreen,
  DadosExame: DadosExameScreen,
  ConfirmaConsulta: confirmaConsultaScreen,
  ConfirmacaoExame: confirmaExameScreen,
},
{
  initialRouteName: 'Login',
  navigationOptions: {
   header: null
  },
  }
)

