import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { createStackNavigator } from 'react-navigation'

class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.Home}>Home Screen</Text>
            </View>
        )
    }
}

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
})

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Home: {
        
    }
})
