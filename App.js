import React from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
import Home from './Home'

let composeEnhancer = compose

if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOE_ || compose
}

const store = createStore(reducers, composeEnhancer())

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

export default App
