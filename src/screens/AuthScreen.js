import React, { Component } from 'react'
import { View, StyleSheet, Button, ImageBackground, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import Input from '../components/ui/Input'
import Heading from '../components/ui/Heading'
import MainText from '../components/ui/MainText'
import backgroundImage from '../../src/assets/background.jpg'
import CustomButton from '../components/ui/CustomButton'

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  }
  constructor(props) {
    super(props)
    Dimensions.addEventListener('change', this.updateStyles)
  }

  componentWillUnmount = () => {
    Dimensions.removeEventListener('change', this.updateStyles)
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    })
  }

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
    let headingText = null

    if (this.state.viewMode === 'portrait') {
      headingText = (
        <MainText>
          <Heading> Please log in </Heading>
        </MainText>
      )
    }
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <View style={styles.inputContainer}>
            <Input placeholder="Email" style={styles.input} />

            <View
              style={
                this.state.viewMode === 'portrait'
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === 'portrait'
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <Input placeholder="Password" style={styles.input} />
              </View>
              <View
                style={
                  this.state.viewMode === 'portrait'
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <Input placeholder="Confirm Password" style={styles.input} />
              </View>
            </View>
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
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitPasswordWrapper: {
    width: '100%'
  },
  landscapePasswordWrapper: {
    width: '45%'
  }
})

export default AuthScreen
