import React from 'react'
import { ScreenOrientation } from 'expo'
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
    //To allow screen rotation in expo
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN)
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

export default App
