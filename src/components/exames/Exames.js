import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Font, AppLoading } from "expo"
import { Icon, Button, Left, Header, Content, Container } from 'native-base'

class ExameScreen extends Component {
    constructor(props){
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
        if(this.state.loading){
            return <AppLoading/>
        }
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')}></Icon>
                        </Button>
                    </Left>
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