import React, { Component } from 'react';
import { Constants } from "expo"
import { StyleSheet, View} from 'react-native'
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Button, Text, Title, Body, Icon, Left } from 'native-base';

class DadosExameScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
        user: {}
    }
}
  static navigationOptions = {
    header: null
}

  render() {
    return (
      <Container>
        <View>
          <View style={styles.statusBar} />
        </View>
        <Header style = {styles.header}>
            <Body style={{height: 50}}>
                <Title>Dados do Exame</Title>
            </Body>
        </Header>
        <Content>
        <View style={styles.agendaExame}>
            <Icon name='pin' style={{ color: 'gray', marginLeft: 10}}></Icon>
            <View style={styles.infoClinica}>
              <Left>
                <Text style={{fontSize: 16, fontWeight: 'bold' }}>Centro Médico São Francisco</Text>
                <Text style={styles.contato}>Rua São Francisco, 444, Centro</Text>
                <Text style={styles.contato}>Penedo-AL</Text>
                <Text style={styles.contato}>82 3551-4444</Text>
              </Left>
              <View style={styles.agendaExame}>
                <Left>
                    <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 25 }}>Eletrocardiograma</Text>
                    <Text style={styles.contato}>Terça Feira 23 de Outubro de 2018</Text>
                    <Text style={styles.contato}>às 11:00</Text>
                </Left>
              </View>
            </View>
        </View>
          <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <Button 
              style={styles.buttonConfirm} onPress={() => this.props.naviagation.navigate('Consultas')}>
                <Text style={{color:'white'}}> Confirmar </Text>
            </Button>
            <Button 
              style={styles.buttonback} onPress={() => this.props.naviagation.navigate('Exames')}>
                <Text style={{color:'white'}}> Voltar </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default createStackNavigator({
  DadosExame: {
          screen: DadosExameScreen
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
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#00CAC9',
      marginRight: 10,
      width: 150,
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
      marginTop: 30,
      alignItems: 'center'
    },
    medicoInfo: {
      marginTop: 40
    },
    crm: {
      fontSize: 14,
      fontWeight: 'bold'
    },
  })