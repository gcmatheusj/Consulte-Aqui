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
import { Container, Form, Item, Label, Input, Button } from 'native-base';

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
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

                    <Form style={styles.formContainer}>
                        <Item floatingLabel>
                            <Label style={{ color: 'white', fontWeight: 'bold' }}>Email</Label>
                            <Input
                                style={styles.input}
                                autoCorrect={false}
                                autoCapitalize='none'
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{ color: 'white', fontWeight: 'bold' }}>Senha</Label>
                            <Input
                                style={styles.input}
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none'
                            />
                        </Item>
                        <Button style={styles.button} full onPress={() => this.props.navigation.navigate('Home')}>
                            <Text>ENTRAR</Text>
                        </Button>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txt_es}>ESQUECI MINHA SENHA</Text>
                        </TouchableOpacity>
                    </Form>
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
        marginTop: 20,
        color: 'white'
    },
    txt_es: {
        fontWeight: 'bold',
        color: 'white',
    }
})