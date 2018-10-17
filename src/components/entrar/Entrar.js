import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Constants } from "expo"
import { Icon, Form, Item, Label, Button, Input, Left, Header, Container, Right, Body, Title } from 'native-base'
import { database } from '../../../firebase'
import firebase from 'firebase'

class EntrarScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {}
        }
    }

    static navigationOptions = {
        header: null
    }

    signIn = userState => {
        
        firebase.auth().signInWithEmailAndPassword(userState.email, userState.password)
        .then(()=>{
            this.props.navigation.navigate('MenuDrawer')
        })
        .catch(function(error) {
            const errorCode = error.code
            const errorMessage = error.message

            if(errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password'){
                alert('Usuário e/ou senha não conferem.')
            } 
        })
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(user)
            } else {
                
            }
        })   
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <View style={styles.statusBar} />
                </View>
                <Header style={styles.header} >
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name='arrow-back'></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Entrar</Title>
                    </Body>
                    <Right />
                </Header>
                <Form style={styles.formContainer}>
                    <Item floatingLabel>
                        <Label style={{ color: 'gray', fontWeight: 'bold' }}>Email</Label>
                        <Input
                            style={styles.input}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(email) => this.setState({ user: {...this.state.user, email: email} })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{ color: 'gray', fontWeight: 'bold' }}>Senha</Label>
                        <Input
                            style={styles.input}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(password) => this.setState({ user: {...this.state.user, password: password} })}
                        />
                    </Item>
                    <Button style={styles.button} full onPress={() => this.signIn(this.state.user)}>
                        <Text style={{ color: 'white', fontWeight: 'bold', }}>ENTRAR</Text>
                    </Button>
                    <TouchableOpacity style={styles.buttones}>
                        <Text style={styles.txt_es}>ESQUECI MINHA SENHA</Text>
                    </TouchableOpacity>
                </Form>
            </Container>
        )
    }
}

export default createStackNavigator({
    Entrar: {
        screen: EntrarScreen
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    statusBar: {
        backgroundColor: "#00CAC9",
        height: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: '#00CAC9',
    },
    formContainer: {
        //flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160
    },
    input: {
        marginBottom: 10,
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#00CAC9',
    },
    buttones: {
        alignItems: 'center',
        marginTop: 20,
    },
    txt_es: {
        fontWeight: 'bold',
        color: 'gray',
    }
})