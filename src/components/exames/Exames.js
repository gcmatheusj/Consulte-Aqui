import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Font, AppLoading, Constants } from "expo"
import { Icon, Button, Left, Header, Content, Container, Body, Title, Right, Card, CardItem } from 'native-base'
import { SearchBar } from 'react-native-elements';
import EletrocardiogramaScreen from './Eletrocardiograma'

class ExameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        })
        this.setState({
            loading: false
        })
    }

    render() {
        if (this.state.loading) {
            return <AppLoading />
        }
        return (
            <Container>
                <View>
                    <View style={styles.statusBar} />
                </View>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu'></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Exames</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='md-search'></Icon>
                        </Button>
                    </Right>
                </Header>
                <Content contentContainerStyle={{
                    padding: 5
                }}>
                    <Title style={styles.listaEspecialidades}>Lista de Especialidades</Title>
                    <Card>
                        <CardItem button onPress={() => this.props.naviagation.navigate('Eletrocardiograma')}>
                            <Body>
                                <Title style={styles.exameEspecialidade}>
                                    Eletrocardiograma
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.exameEspecialidade}>
                                    Eletroencefalograma
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.exameEspecialidade}>
                                    Endoscopia Digestiva
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.exameEspecialidade}>
                                    Sangue
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.exameEspecialidade}>
                                    Fezes e Urina
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.exameEspecialidade}>
                                    Radiologia
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.exameEspecialidade}>
                                    Teste Ergométrico
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.exameEspecialidade}>
                                    Ultrassonografia
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.exameEspecialidade}>
                                    Avaliação Fisioterapêutica
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default ExameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusBar: {
        backgroundColor: "#00CAC9",
        height: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: '#00CAC9'
    },
    search: {
        height: 10
    },
    exameEspecialidade: {
        color: 'gray',
        fontSize: 14
    },
    listaEspecialidades: {
        padding: 5, 
        alignContent: 'center', 
        justifyContent: 'center',
        color: 'gray', 
        alignContent: 'center', 
        justifyContent: 'center', 
        fontSize: 18 
    }
})