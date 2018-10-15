import React, { Component } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Font, AppLoading, Constants } from "expo"
import { Icon, Button, Left, Header, Content, Container, Right, Body, Title, Card, CardItem } from 'native-base'
import { SearchBar } from 'react-native-elements'

class ConsultaScreen extends Component {
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

    static navigationOptions = {
        header: null,
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
                    <Title style={{ padding: 5, alignContent: 'center', justifyContent: 'center', color: 'gray', alignContent: 'center', justifyContent: 'center', fontSize: 18 }}>Especialidades Médicas</Title>
                    <Card>
                        <CardItem button onPress={() => this.props.navigation.navigate('CadastroCli')}>
                            <Body>
                                <Title style={styles.especialidadeMed}>
                                    Cardiologista
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.especialidadeMed}>
                                    Cirurgião Plástico
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.especialidadeMed}>
                                    Clínico Geral
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.especialidadeMed}>
                                    Dentista
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.especialidadeMed}>
                                    Dermatologista
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.especialidadeMed}>
                                    Fisioterapeuta
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.especialidadeMed}>
                                    Genicologista
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Title style={styles.especialidadeMed}>
                                    Nutricionista
                                </Title>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default ConsultaScreen

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
        backgroundColor: '#00CAC9',
    },
    search: {
        height: 10
    },
    especialidadeMed: {
        color: 'gray',
        fontSize: 14
    }
})