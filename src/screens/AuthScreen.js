import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Entypo } from '@expo/vector-icons'

class AuthScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Entypo name="login" size={30} color={tintColor} />
    }
  }

  loginHandler = params => {}

  render() {
    return (
      <View>
        <Text> Auth Screen </Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    )
  }
}

export default AuthScreen
