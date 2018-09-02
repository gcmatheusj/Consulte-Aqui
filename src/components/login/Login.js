import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Font, AppLoading, Constants } from "expo"
import * as firebase from 'firebase'

import logo from '../../assets/consulte-aqui.png'
import { Container, Form, Item, Label, Input, Button } from 'native-base';

const firebaseConfig = {
    apiKey: "AIzaSyC7K4Thh7Cv-wx4--kU4J1z8yxW5EH4Eyc",
    authDomain: "consulte-aqui.firebaseapp.com",
    databaseURL: "https://consulte-aqui.firebaseio.com",
    projectId: "consulte-aqui",
    storageBucket: "consulte-aqui.appspot.com",
  }
  
  firebase.initializeApp(firebaseConfig);

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            email: '',
            senha: ''
        }
    }

    signUpUser = (email, senha) => {
        try {
           if(this.state.senha.length < 6) {
               alert('Por favor, digite pelo menos 6 caracteres para senha')
               return;
           } 
           firebase.auth().createUserWithEmailAndPassword(email, senha)
           alert('Cadastro realizado com sucesso!')
        } catch (error) {
            console.log(error.toString())
        }
    }

    signInUser = (email, senha) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, senha)
                .then(function (user) {
                })
                .then(this.props.navigation.navigate('Home'))
        } catch (error) {
            console.log(error.toString())
        }
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        })
        this.setState({
            loading: false
        })
    }

    static navigationOptions = {
        header: null,
    }

    render() {
        if (this.state.loading) {
            return <AppLoading />
        }
        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={logo}
                        />
                    </View>

                    <View style={styles.formContainer}>
                        <Button style={styles.button} full rounded onPress={() => this.props.navigation.navigate('Entrar') /*{ this.signInUser(this.state.email, this.state.senha)}*/}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>ENTRAR COM EMAIL</Text>
                        </Button>
        <Button style={{ backgroundColor: '#1565C0', marginTop: 15 }} full rounded onPress={() => this.props.navigation.navigate('CadastroCli') /*this.signUpUser(this.state.email, this.state.senha)}*/}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>CADASTRAR</Text>
                        </Button>
                    </View>
                </View>
            </Container>
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
        flex: 1,
        paddingTop: 70,
        paddingBottom: 20
    },
    logo: {
        width: 200,
        height: 150
    },
    formContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 120
    },
    input: {
        marginBottom: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#009898',
    },
    buttones:{
        alignItems: 'center',
        marginTop: 20,
    },
    txt_es: {
        fontWeight: 'bold',
        color: 'white',
    }
})