import React, { Component } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Font, AppLoading } from "expo"
import { Icon, Button, Left, Header, Content, Container, Right, Body, Title } from 'native-base'

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
                <Header style={styles.header} >
                    <Left>
                        <Button transparent>
                            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Consulta Screen</Text>
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
})