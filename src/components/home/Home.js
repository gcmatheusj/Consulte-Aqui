import React, { Component } from 'react';
import { Constants } from "expo"
import { StyleSheet, View, Image} from 'react-native'
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Button, Text, Title } from 'native-base';

import calendar from '../../assets/calendar.png'

class HomeScreen extends Component {
  
  static navigationOptions = {
    header: null
}

  render() {
    return (
      <Container>
        <View>
          <View style={styles.statusBar} />
        </View>
        <Header style = {styles.header} />
        <Content>
        <Title style={styles.titleHome}>Agendamento de Consultas e Exames,</Title>
        <Title style={styles.titleHome}>com praticidade e segurança</Title>
          <View style={{flexDirection: 'row'}}>
            <Button bordered ><Text> Consultas </Text></Button>
            <Button bordered ><Text> Exames </Text></Button>
          </View>
        </Content>
        <Container>
          <View style={styles.areaPaciente}>
            <Title style={{color: 'white', textAlign: 'left', marginLeft: 10}}>Área do Paciente</Title>
          </View>
        </Container>
        <Container>
          <View style={styles.viewCalendar}>
            <Image source={calendar} style={{ height: 85, width: 100 }} />
          </View>
        </Container>
      </Container>
    );
  }
}

export default createStackNavigator({
    Home: {
          screen: HomeScreen
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
    btn: {
      color: '#00CAC9'
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
    }
  })