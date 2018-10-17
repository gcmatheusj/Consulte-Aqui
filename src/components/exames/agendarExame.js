import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Constants } from "expo"
import { Icon, Button, Left, Header, Content, Container, Right, Body, Title} from 'native-base'

class AgendaExameScreen extends Component {
    state = {
        horario: ''
    }

    static navigationOptions = {
        header: null,
    }

    render(){
        console.log(this.state)
        return (
           <Container>
                <View>
                    <View style={styles.statusBar} />
                </View>
                <Header style={styles.header} >
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu'></Icon>
                        </Button>
                    </Left>
                    <Body style={{height: 50}}>
                        <Title>Eletrocardiograma</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.agendaExame}>
                        <Icon name='pin' style={{ color: 'gray', marginLeft: 10}}></Icon>
                        <View style={styles.infoClinica}>
                            <Title style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Centro Médico São Francisco</Title>
                            <Text style={styles.contato}>Rua São Francisco, 444, Centro</Text>
                            <Text style={styles.contato}>Penedo-AL</Text>
                            <Text style={styles.contato}>82 3551-4444</Text>
                        </View>
                    </View>
                    <Title style={{ color: 'gray', marginTop: 5 }}>Agende Seu Exame</Title>
                    <View style={styles.subHeading}>
                        <Text style={styles.horariosDisponiveis}>Horários Disponiveis</Text>
                        <Text style={styles.dia}>Segunda-Feira</Text>
                    </View>
                    <View style={styles.horarios}>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horario: '09:00' }) }}><Text style={styles.btnText}> 09:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horario: '10:00' }) }}><Text style={styles.btnText}> 10:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horario: '11:00' }) }}><Text style={styles.btnText}> 11:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horario: '12:00' }) }}><Text style={styles.btnText}> 12:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horario: '13:00' }) }}><Text style={styles.btnText}> 13:00 </Text></Button>
                        <Button style={styles.btn} onPress={()=> { this.setState({ horario: '14:00' }) }}><Text style={styles.btnText}> 14:00 </Text></Button>
                    </View>
                </Content>
           </Container>
        )
    }
}

export default createStackNavigator({
    AgendaExame: {
        screen: AgendaExameScreen
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
    agendaExame: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00CAC9',
        padding: 10
    },
    medicoFoto: {
        marginLeft: 7,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    infoClinica: {
        marginLeft: 10
    },
    contato: {
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
    }
})