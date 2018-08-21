import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import ConsultaScreen from '../consultas/Consultas'
import ExameScreen from '../exames/Exames'

class HomeScreen extends Component {
    static navigationOptions = {
        header: null,  
    }

    render(){
        return(
            <DrawerMenu></DrawerMenu>
        )
    }
}

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
})

const DrawerMenu = createDrawerNavigator({
    Consultas: {
        screen: ConsultaScreen,
    },
    Exames: {
        screen: ExameScreen
    },    
})

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
