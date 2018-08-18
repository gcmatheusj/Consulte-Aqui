import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>LOGO</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder="Usuário ou Email"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        style={styles.input}
                    />
                    <Button color='#009094' title="Entrar" onPress={() => this.props.navigation.navigate('Home')} />
                </View>
            </View>
        )
    }
}

export default createStackNavigator({
    Login: {
        screen: LoginScreen
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00CAC9',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    logo: {
        color: 'white',
    },
    formContainer: {
        padding: 20,
        paddingBottom: 200
    },
    input: {
        height: 40,
        marginBottom: 20,
        color: 'white',
        paddingHorizontal: 10
    },   
})