import React, { Component } from 'react';
import { Constants } from "expo"
import { StyleSheet, View, Image} from 'react-native'
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Button, Text, Title, Body, Icon, Left } from 'native-base';
import { database, } from '../../../firebase'

class DadosConsultaScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
        user: {}
    }
  }
  
  static navigationOptions = {
    header: null,
  }

  marcarConsulta = () => {
    const { navigation } = this.props
    const consulta = navigation.getParam('dadosConsulta')
    const firebaseRef = database.ref('consulta/')
    firebaseRef.push(consulta)
    alert('Consulta Agendada!')
}

  render() {
    return (
      <Container>
        <Content>
        <Title style={{marginTop: 5, color: 'gray'}}>Confirme sua consulta</Title>
        <View style={styles.medicoInfo}>
              <Text style={styles.contato}>José Algusto Vieira</Text>
              <Text style={styles.crm}>CRM: 0000-0  Cardiologista</Text>
        </View>
        <View style={styles.agendaExame}>
            <Icon name='pin' style={{ color: 'gray', marginLeft: 10}}></Icon>
            <View style={styles.infoClinica}>
              <Left>
                <Text style={styles.contato}>Centro Médico São Francisco</Text>
                <Text style={styles.contato}>Rua São Francisco, 444, Centro</Text>
                <Text style={styles.contato}>Penedo-AL</Text>
                <Text style={styles.contato}>82 3551-4444</Text>
                <Text style={styles.contato}>Segunda Feira 22 de Outubro de 2018</Text>
                <Text style={styles.contato}>às 10:00</Text>
              </Left>
            </View>
        </View>
            <Button 
              style={styles.buttonConfirm} full onPress={() => this.marcarConsulta()}>
                <Text style={{color:'white'}}> Confirmar </Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

export default createStackNavigator({
  DadosConsulta: {
          screen: DadosConsultaScreen
      }
  })

  const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#00CAC9",
        height: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: '#00CAC9'
    },
    titulo: {
      color: 'black'
    },
    titleHome: {
      padding: 5, 
      alignContent: 'center', 
      justifyContent: 'center', 
      color: 'gray', 
      fontSize: 18
    },
    contato: {
      color: 'gray'
    },  
    viewCalendar: {
      height: 100, 
      backgroundColor: 'white', 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    areaPaciente: {
      backgroundColor: '#00CAC9'
    },
    buttonConfirm: {
      backgroundColor: '#2196F3',
      marginRight: 16,
      marginLeft: 16,
      marginTop: 55
    },
    buttonback: {
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginRight: 10,
        width: 150,
        marginTop: 55
      },
      agendaExame: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    infoClinica: {
      marginLeft: 30,
      marginTop: 10,
      alignItems: 'center'
    },
    medicoInfo: {
      marginTop: 20,
      alignItems: "center"
    },
    crm: {
      fontSize: 14,
      color: 'gray'
    },
  })