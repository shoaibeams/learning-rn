import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/store/reducers'
import Home from './Home'

const store = createStore(reducers)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

// let composeEnhancer = compose

// if (__DEV__) {
//   composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOE_ || compose
// }

// const store = createStore(reducers, composeEnhancer())
