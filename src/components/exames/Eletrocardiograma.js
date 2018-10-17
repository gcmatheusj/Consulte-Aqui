import React, { Component } from "react";
import { Constants } from "expo"
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Container, Header, Content, Card, CardItem, Text, Body, Title, Left, Right, Icon, Button } from "native-base";

class  EletrocardiogramaScreen extends Component {
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
            <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon name='menu'></Icon>
            </Button>
            </Left>
            <Body>
                <Title>Eletrocardiograma</Title>
            </Body>

            <Right>
                <Button transparent>
                    <Icon name='md-search'></Icon>
                </Button>
            </Right>
        </Header>
        <Content padder>
        <Title style = {styles.titleExame}>Clínicas</Title>
          <Card>
            <CardItem header button onPress={() => this.props.naviagation.navigate('')}>
              <Body>                
                <Title style = {styles.titulo}>Centro Médico São Francisco</Title>
                <Text>Rua São Francisco, 444, Centro</Text>
                <Text>Penedo-AL</Text>
                <Text>Valor do exame: R$ 250,00</Text>
                <Text>82 3551-4444</Text>
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
    color: 'black'
  },
  titleExame: {
    padding: 5, 
    alignContent: 'center', 
    justifyContent: 'center', 
    color: 'gray', 
    fontSize: 18
  }
})