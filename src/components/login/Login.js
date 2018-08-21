import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { createStackNavigator } from 'react-navigation'

import logo from '../../assets/consulte-aqui.png'

class LoginScreen extends Component {

    static navigationOptions = {
        header: false,
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={logo}
                        />
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
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txt_es}>ESQUECI MINHA SENHA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        flexGrow: 1,
        paddingTop: 100,
        paddingBottom: 20
    },
    logo: {
        width: 200,
        height: 150
    },
    formContainer: {
        padding: 20,
        paddingBottom: 200
    },
    input: {
        height: 40,
        marginBottom: 20,
        color: 'white',
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        paddingTop: 20
    },
    txt_es: {
        fontWeight: 'bold',
        color: 'white',   
    }
})