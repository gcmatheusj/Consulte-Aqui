import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Constants } from "expo"
import { Icon, Form, Item, Label, Button, Input, Left, Header, Content, Container, Right, Body, Title, Card, CardItem } from 'native-base'
import { database, } from '../../../firebase'
import firebase from 'firebase'

class MedicoScreen extends Component {
    state = {
        paciente: '',
        email: '',
        horarioConsulta: '',
        dadosClinica: {
            nomeClinica: 'Centro Médico São Francisco',
            endereco: 'Rua São Francisco, 444, Centro, Penedo-Al',
            telefone: '(82) 3551-444'
        },
        valor: 'R$ 150,00',
        medico: 'José Augusto Vieira'
    }

    static navigationOptions = {
        header: null,
    }

    render(){
        const userLoggedIn = firebase.auth().currentUser
        console.log(this.state)
        return (
           <Container>
                <Content>
                    <View style={styles.medico}>
                        <View style={styles.medicoFoto}></View>
                        <View style={styles.medicoInfo}>
                            <Title style={{ color: 'white', fontSize: 16 }}>JOSÉ AUGUSTO VIEIRA</Title>
                            <Text style={styles.crm}>CRM: 0000-0</Text>
                        </View>
                    </View>
                    <Title style={{ color: 'gray', marginTop: 5 }}>Agende Sua Consulta</Title>
                    <View style={styles.subHeading}>
                        <Text style={styles.horariosDisponiveis}>Horários Disponiveis</Text>
                        <Text style={styles.dia}>Segunda-Feira</Text>
                    </View>
                    <View style={styles.horarios}>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horarioConsulta: '09:00', paciente: userLoggedIn.displayName, email: userLoggedIn.email })  }}><Text style={styles.btnText}> 09:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horarioConsulta: '10:00', paciente: userLoggedIn.displayName, email: userLoggedIn.email }) }}><Text style={styles.btnText}> 10:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horarioConsulta: '11:00', paciente: userLoggedIn.displayName, email: userLoggedIn.email }) }}><Text style={styles.btnText}> 11:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horarioConsulta: '12:00', paciente: userLoggedIn.displayName, email: userLoggedIn.email }) }}><Text style={styles.btnText}> 12:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horarioConsulta: '13:00', paciente: userLoggedIn.displayName, email: userLoggedIn.email }) }}><Text style={styles.btnText}> 13:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horarioConsulta: '14:00', paciente: userLoggedIn.displayName, email: userLoggedIn.email }) }}><Text style={styles.btnText}> 14:00 </Text></Button>
                    </View>
                    <View style={styles.localidade}>
                        <Icon name='pin' style={{ color: 'gray', marginRight: 10}}></Icon>
                        <View style={styles.localidadeContent}>
                            <Text style={styles.localidadeText}>Centro Médico São Francisco</Text>
                            <Text style={styles.localidadeText}>Rua São Francisco, 444, Centro, Penedo-Al</Text>
                            <Text style={styles.localidadeText}>(82) 3551-444</Text>
                        </View>
                    </View>
                    <Button style={styles.btnContinuar} full onPress={()=> this.props.navigation.navigate('ConfirmarConsulta', { dadosConsulta: this.state})}><Text style={{ color: 'white'}}>CONTINUAR</Text></Button>
                </Content>
           </Container>
        )
    }
}

export default createStackNavigator({
    Medico: {
        screen: MedicoScreen
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        backgroundColor: "#00CAC9",
        height: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: '#00CAC9',
    },
    especialidadeMed: {
        color: 'white',
        fontSize: 14
    },
    medico: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00CAC9',
        padding: 5
    },
    medicoFoto: {
        marginLeft: 7,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    medicoInfo: {
        marginLeft: 10
    },
    crm: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#009898',
        margin: 7,
        width: 100,
        justifyContent: 'center'
    },
    btnText: {
        color: 'white'
    },
    horarios: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }, 
    subHeading: {
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 10
    },
    horariosDisponiveis: {
        color: 'gray',
        fontWeight: 'bold'
    },
    dia: {
        color: 'gray'
    },
    localidade: {
        marginLeft: 16,
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'row' 
    },
    localidadeText: {
        color: 'gray'
    },
    btnContinuar: {
        backgroundColor: '#2196F3',
        marginLeft: 16, 
        marginRight: 16, 
        marginTop: 50
    }
})