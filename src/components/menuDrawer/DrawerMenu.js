import React, { Component } from 'react'
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native'
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation'

import NavExameScreenList from '../exames/NavExames'
import logo from '../../assets/consulte-aqui-menu.png'
import NavConsultaScreenList from '../consultas/NavConsultas'
import HomeScreen from '../home/Home'

class DrawerMenuScreen extends Component {
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
    MenuDrawer: {
        screen: DrawerMenuScreen,
    },
})

const CustomDrawerComponent = props => (
    <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
        <View style={Styles.viewDrawer}>
            <Image source={logo} style={{ height: 85, width: 100, }} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)


const DrawerMenu = createDrawerNavigator({
    Home: HomeScreen,
    Consultas: NavConsultaScreenList,
    Exames: NavExameScreenList,
}, 
    {
        contentComponent: CustomDrawerComponent
    }
)

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewDrawer: {
        height: 100, 
        backgroundColor: 'white', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
})
