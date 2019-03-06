import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { tryAuth } from '../actions/'

import Input from '../components/ui/Input'
import Heading from '../components/ui/Heading'
import MainText from '../components/ui/MainText'
import backgroundImage from '../../src/assets/background.jpg'
import CustomButton from '../components/ui/CustomButton'
import validate from '../../src/utility/validation'

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
    authMode: 'login',
    controls: {
      email: {
        value: '',
        valid: false,
        validationRules: { isEmail: true },
        touched: false
      },
      password: {
        value: '',
        valid: false,
        validationRules: { minLength: 6 },
        touched: false
      },
      confirmPassword: {
        value: '',
        valid: false,
        validationRules: { equalTo: 'password' },
        touched: false
      }
    }
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
    const { email, password } = this.state.controls
    const authData = {
      email: email.value,
      password: password.value
    }
    this.props.tryAuth(authData)
    this.props.navigation.navigate('findPlace')
  }

  updateInputState = (key, value) => {
    let connectedValue = {}
    const controls = this.state.controls

    if (controls[key].validationRules.equalTo) {
      const equalControl = controls[key].validationRules.equalTo
      const equalValue = controls[equalControl].value
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      }
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      }
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === 'password'
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      }
    })
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'login' ? 'signUp' : 'login'
      }
    })
  }
  render() {
    let headingText = null
    const email = this.state.controls.email
    const password = this.state.controls.password
    const confirmPassword = this.state.controls.confirmPassword

    let confirmPasswordControl = null

    if (this.state.viewMode === 'portrait') {
      headingText = (
        <MainText>
          <Heading> Please log in </Heading>
        </MainText>
      )
    }

    if (this.state.authMode === 'signUp') {
      confirmPasswordControl = (
        <View
          style={
            this.state.viewMode === 'portrait'
              ? styles.portraitPasswordWrapper
              : styles.landscapePasswordWrapper
          }
        >
          <Input
            placeholder="Confirm Password"
            style={styles.input}
            value={confirmPassword.value}
            onChangeText={val => this.updateInputState('confirmPassword', val)}
            valid={confirmPassword.valid}
            touched={confirmPassword.touched}
            secureTextEntry
          />
        </View>
      )
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <CustomButton color="#29aaf4" onPress={this.switchAuthModeHandler}>
            Switch to {this.state.authMode === 'login' ? 'Sign Up' : 'Sign In'}
          </CustomButton>
          {headingText}

          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              style={styles.input}
              value={email.value}
              onChangeText={val => this.updateInputState('email', val)}
              valid={email.valid}
              touched={email.touched}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />

            <View
              style={
                this.state.viewMode === 'portrait' || this.state.authMode === 'login'
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === 'portrait' ||
                  this.state.authMode === 'login'
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <Input
                  placeholder="Password"
                  style={styles.input}
                  value={password.value}
                  onChangeText={val => this.updateInputState('password', val)}
                  valid={password.valid}
                  touched={password.touched}
                  secureTextEntry
                />
              </View>
              {confirmPasswordControl}
            </View>
          </View>

          <CustomButton
            color="#29aaf4"
            onPress={this.loginHandler}
            disabled={
              (!confirmPassword.valid && this.state.authMode === 'signUp') ||
              !email.valid ||
              !password.valid
            }
          >
            Submit
          </CustomButton>
        </KeyboardAvoidingView>
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

export default connect(
  null,
  { tryAuth }
)(AuthScreen)
