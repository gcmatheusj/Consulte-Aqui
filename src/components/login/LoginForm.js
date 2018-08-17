import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
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
                <Button color='#009094' title="Entrar"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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