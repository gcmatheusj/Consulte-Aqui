import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import ConsultaScreen from './Consultas'
import CardiologistaScreen from '../cardiologista/Cardiologista'
import MedicoScreen from '../cardiologista/Medico'

const NavConsultaList = createStackNavigator({
    Consultas: ConsultaScreen,
    Cardiologista: CardiologistaScreen,
    Medico: MedicoScreen
},
{
    navigationOptions: {
        title: 'Cardiologista',
        headerTintColor: '#fff',
        headerStyle: {
        backgroundColor: '#00CAC9',
        },
    },
    }
)

export default NavConsultaList