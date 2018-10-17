import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Container, Header, Content, Button, Text, View } from 'native-base';

class confirmaConsultaScreen extends Component {

static navigationOptions = {
    header: null
}

  render() {
    return (
      <Container>
      <View style={styles.container}>
        <Header style = {styles.header}/>
            <Content>
                <View style={{alignContent: 'center', justifyContent: 'center',}}>
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                        CONSULTA AGENDADA
                    </Text>
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                        COM SUCESSO!
                    </Text>
                </View>
                <Button style={{backgroundColor: 'white'}}>
                    <Text style={{color:'#00CAC9'}}> OK </Text> 
                </Button>
            </Content>
        </View>
      </Container>
    );
  }
}

export default createStackNavigator({
    ConfirmaConsulta: {
          screen: confirmaConsultaScreen
      }
  })

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00CAC9',
        alignContent: 'center', 
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#00CAC9'
    },
})