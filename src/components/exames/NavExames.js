import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import AgendaExameScreen from './agendarExame'
import DadosExameScreen from './dadosExame'
import ExamesScreen from './Exames'
import EletrocardiogramaScreen from './Eletrocardiograma'

const NavExameList = createStackNavigator({
    Exames: ExamesScreen,
    AgendaExame: AgendaExameScreen,
    Eletrocardiograma: EletrocardiogramaScreen,
    DadosExame: DadosExameScreen,
},
{
    navigationOptions: {
        title: 'Eletrocardiograma',
        headerTintColor: '#fff',
        headerStyle: {
        backgroundColor: '#00CAC9',
        },
    },
    }
)

export default NavExameList