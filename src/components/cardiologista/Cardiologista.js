import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Constants } from "expo"
import { Icon, Button, Left, Header, Content, Container, Right, Body, Title, Card, CardItem } from 'native-base'

class CardiologistaScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    render(){
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
                    <Body>
                        <Title>Consultas</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='md-search'></Icon>
                        </Button>
                    </Right>
                </Header>
                <Content contentContainerStyle={{ padding: 5 }}>
                    <Title style={styles.especialidade}>CARDIOLOGISTAS</Title>
                    <Card>
                        <CardItem button onPress={() => this.props.navigation.navigate('Medico')}>
                            <Body>
                                <Title style={styles.Medico}>
                                    JOSÉ AUGUSTO VIEIRA
                                </Title>
                                <Text>CRM: 0000-0</Text>
                                <Text>Valor da Consulta: R$: 150,00</Text>
                                <Text>Centro Médico São Francisco</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
           </Container>
        )
    }
}

export default createStackNavigator({
    Cardiologista: {
        screen: CardiologistaScreen
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
    Medico: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold'
    },
    especialidade: {
        padding: 5, 
        alignContent: 'center', 
        justifyContent: 'center', 
        color: 'gray', 
        fontSize: 18 
    }
})