import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import AuthScreen from './src/screens/AuthScreen'
import FindPlace from './src/screens/FindPlace'
import SharePlace from './src/screens/SharePlace'

let composeEnhancer = compose

if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOE_ || compose
}

const store = createStore(reducers, composeEnhancer())

export default class App extends React.Component {
  render() {
    console.log('object')
    const MainNavigator = createBottomTabNavigator({
      findPlace: {
        screen: FindPlace,
        navigationOptions: { title: 'Find Place' }
      },
      // auth: { screen: AuthScreen, navigationOptions: { title: 'Login' } },
      sharePlace: {
        screen: SharePlace,
        navigationOptions: { title: 'Share Place' }
      }
    })

    const AppContainer = createAppContainer(MainNavigator)

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
