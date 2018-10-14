import React, { Component } from 'react'
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native'
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation'

import ConsultaScreen from '../consultas/Consultas'
import ExameScreen from '../exames/Exames'
import logo from '../../assets/consulte-aqui-menu.png'

class DrawerMenuHomeScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <DrawerMenu></DrawerMenu>
        )
    }
}

export default createStackNavigator({
    Home: {
        screen: DrawerMenuHomeScreen,
    },
})

const CustomDrawerComponent = props => (
    <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
        <View style={{ height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={logo} style={{ height: 85, width: 100, }} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)


const DrawerMenu = createDrawerNavigator({
    Consultas: ConsultaScreen,
    Exames: ExameScreen
}, {
        contentComponent: CustomDrawerComponent
    }
)

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
