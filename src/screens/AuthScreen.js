import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import Input from '../components/ui/Input'
import Heading from '../components/ui/Heading'
import backgroundImage from '../../src/assets/background.jpg'
import CustomButton from '../components/ui/CustomButton'

class AuthScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Entypo name="login" size={30} color={tintColor} />
    },
    headerTitle: 'Login'
  }

  loginHandler = () => {
    this.props.navigation.navigate('findPlace')
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Heading> Please log in </Heading>
          <View style={styles.inputContainer}>
            <Input placeholder="Email" style={styles.input} />
            <Input placeholder="Password" style={styles.input} />
          </View>
          <Button title="Login" onPress={this.loginHandler} />
          <CustomButton color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </CustomButton>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: '100%'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  }
})

export default AuthScreen
