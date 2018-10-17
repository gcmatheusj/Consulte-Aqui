import React, { Component } from 'react';
import { Constants } from "expo"
import { StyleSheet, View, Image} from 'react-native'
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Button, Text, Title, Left, Right, Body, Icon } from 'native-base';

import calendar from '../../assets/calendar.png'
import medic from '../../assets/medica.jpg'

class HomeScreen extends Component {
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
        <Header style = {styles.header} >
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu'></Icon>
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <View>
          <Image source={medic} style={{ height: 200, width: 400, marginBottom: 40 }} />
        </View>
        <Title style={styles.titleHome}>Agendamento de Consultas e Exames,</Title>
        <Title style={styles.titleHome}>com praticidade e segurança</Title>
          <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <Button 
              bordered 
              style={styles.button} onPress={() => this.props.navigation.navigate('Consultas')}>
                <Text style={{color:'#00CAC9'}}> Consultas </Text>
            </Button>
            <Button 
              bordered 
              style={styles.button} onPress={() => this.props.navigation.navigate('Exames')}>
                <Text style={{color:'#00CAC9'}}> Exames </Text>
            </Button>
          </View>
        </Content>
        {/*<View style={styles.areaPaciente}>
            <Title style={{color: 'white', textAlign: 'left', marginLeft: 10}}>Área do Paciente</Title>
          </View>}
          <View style={styles.viewCalendar}>
            <Image source={calendar} style={{ height: 85, width: 100, marginBottom: 100, marginTop: 80}} />
          </View>*/}
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
    button: {
      alignItems:'center',
      justifyContent: 'center',
      borderColor: '#00CAC9',
      marginRight: 10,
      width: 150,
      marginTop: 40
    },
  })