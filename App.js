import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Login from './src/components/login/Login'

export default class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
