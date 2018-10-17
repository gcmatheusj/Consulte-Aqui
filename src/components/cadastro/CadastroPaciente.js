import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Font, AppLoading, Constants } from "expo"
import { Icon, Form, Item, Label, Button, Input, Left, Header, Content, Container, Right, Body, Title, Card, CardItem } from 'native-base'
import { database, } from '../../../firebase'
import firebase from 'firebase'

class CadastroClienteScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {}
        }
    }

    static navigationOptions = {
        header: null
    }
    
    signUpUser = userState => {
        const firebaseRef = database.ref('user/')
        firebaseRef.push(userState)
        firebase.auth().createUserWithEmailAndPassword(userState.email, userState.password).catch(error => {
            const errorCode = error.code
            const errorMessage = error.message

            if (errorCode === 'auth/email-already-in-use'){
                alert('E-mail já cadastrado.');
            }
        })
        firebase.auth().onAuthStateChanged(function(user) {

            if (user) {

               // Updates the user attributes:

              user.updateProfile({ // <-- Update Method here

                displayName: userState.name,

              }).then(function() {

                // Profile updated successfully!
                //  "NEW USER NAME"

                var displayName = user.displayName;

              }, function(error) {
                // An error happened.
              })     

            }
            console.log(user)
    }); 
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
                        <Title>Cadastro</Title>
                    </Body>
                    <Right />
                </Header>
                <Form style={styles.formContainer}>
                    <Item floatingLabel>
                        <Label style={{ color: 'gray', fontWeight: 'bold' }}>Nome Completo</Label>
                        <Input
                            style={styles.input}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(name) => this.setState({ user: {...this.state.user, name: name} })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{ color: 'gray', fontWeight: 'bold' }}>E-mail</Label>
                        <Input
                            style={styles.input}
                            secureTextEntry={false}
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
                    <Item floatingLabel>
                        <Label style={{ color: 'gray', fontWeight: 'bold' }}>Confirmar Senha</Label>
                        <Input
                            style={styles.input}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(confirmPassword) => this.setState({ user: {...this.state.user, confirmPassword: confirmPassword } })}
                        />
                    </Item>
                    <Button style={styles.button} full rounded onPress={() => this.signUpUser(this.state.user) }> 
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>CADASTRAR</Text>
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default createStackNavigator({
    CadastroCli: {
        screen: CadastroClienteScreen
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