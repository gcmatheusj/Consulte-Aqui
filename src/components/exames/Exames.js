import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Font, AppLoading, Constants } from "expo"
import { Icon, Button, Left, Header, Content, Container, Body, Title, Right } from 'native-base'

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
                        <Button transparent>
                            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Exames</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Exame Screen</Text>
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
    }
})