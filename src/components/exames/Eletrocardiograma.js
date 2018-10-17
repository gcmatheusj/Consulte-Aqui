import React, { Component } from "react";
import { Constants } from "expo"
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Container, Header, Content, Card, CardItem, Text, Body, Title, Left, Right, Icon, Button } from "native-base";

class  EletrocardiogramaScreen extends Component {
  constructor(props){
      super(props)
  }

  static navigationOptions = {
      header: null,
  }
  render() {
    return (
      <Container>
        <Content padder>
        <Title style = {styles.titleExame}>Selecione uma clínica abaixo.</Title>
          <Card>
            <CardItem header button onPress={() => this.props.navigation.navigate('AgendaExame')}>
              <Body>                
                <Title style = {styles.titulo}>Centro Médico São Francisco</Title>
                <Text style={styles.bodyContent}>Rua São Francisco, 444, Centro</Text>
                <Text style={styles.bodyContent}>Penedo-AL</Text>
                <Text style={styles.bodyContent}>Valor do exame: R$ 250,00</Text>
                <Text style={styles.bodyContent}>82 3551-4444</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default createStackNavigator({
  Eletrocardiograma: {
        screen: EletrocardiogramaScreen
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
    color: 'gray',
    fontSize: 15,
    fontWeight: 'bold'
  },
  titleExame: {
    padding: 5, 
    alignContent: 'center', 
    justifyContent: 'center', 
    color: 'gray', 
    fontSize: 18
  },
  bodyContent: {
    color: 'gray'
  }
})