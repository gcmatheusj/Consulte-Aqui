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

import logo from '../../assets/consulte-aqui.png'
import { Container, Form, Item, Label, Input, Button, Icon, Left } from 'native-base'

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            email: '',
            senha: ''
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
                        <Button style={styles.button} full rounded onPress={() => this.props.navigation.navigate('Entrar')}>
                            <Icon name="mail"></Icon>
                            <Text style={{ color: 'white', fontWeight: 'bold', flex: 1}}>ENTRAR COM EMAIL</Text>
                            <Icon name="ios-arrow-forward"></Icon>
                        </Button>
                        <Button style={{ backgroundColor: '#1565C0', marginTop: 15,}} full rounded onPress={() => this.props.navigation.navigate('CadastroCli')}>
                            <Icon name="person"></Icon>
                            <Text style={{ color: 'white', fontWeight: 'bold', flex: 1 }}>CADASTRAR</Text>
                            <Icon name="ios-arrow-forward"></Icon>
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
        paddingBottom: 50
    },
    input: {
        marginBottom: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        //flex: 1,
        //justifyContent: 'flex-start',
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