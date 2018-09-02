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
import { Icon, Form, Item, Label, Button, Input, Left, Header, Content, Container, Right, Body, Title, Card, CardItem } from 'native-base'

class CadastroClienteScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <View style={styles.statusBar} />
                </View>
                <Header style={styles.header} >
                    <Left>
                        <Button transparent>
                            <Icon name='ios-arrow-back-outline' onPress={() => this.props.navigation.openDrawer()}></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Cadastro</Title>
                    </Body>
                </Header>
                <Form style={styles.formContainer}>
                    <Item floatingLabel>
                        <Label style={{ color: 'black', fontWeight: 'bold' }}>Nome Completo</Label>
                        <Input
                            style={styles.input}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{ color: 'black', fontWeight: 'bold' }}>CPF</Label>
                        <Input
                            style={styles.input}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(senha) => this.setState({ senha })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{ color: 'black', fontWeight: 'bold' }}>Senha</Label>
                        <Input
                            style={styles.input}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{ color: 'black', fontWeight: 'bold' }}>Confirmar Senha</Label>
                        <Input
                            style={styles.input}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(senha) => this.setState({ senha })}
                        />
                    </Item>
                    <Button style={styles.button} full rounded onPress={() => this.props.navigation.navigate('Home') /*{ this.signInUser(this.state.email, this.state.senha)}*/}>
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
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160
    },
    input: {
        marginBottom: 10,
        color: 'black',
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
        color: 'black',
    }
})