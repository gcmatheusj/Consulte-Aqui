import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>LOGO</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47c2c5',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    logo: {
        color: 'white',
    }
})