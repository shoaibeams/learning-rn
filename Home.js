import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import PlaceDetail from './src/screens/PlaceDetail'
import SharePlace from './src/screens/SharePlace'
import FindPlace from './src/screens/FindPlace'

class Home extends Component {
  render() {
    console.log(this.props)
    const stack = createStackNavigator({
      places: {
        screen: FindPlace,
        navigationOptions: {
          title: 'Places'
        }
      },
      details: {
        screen: PlaceDetail
      }
    })

    const MainNavigator = createBottomTabNavigator({
      findPlace: {
        screen: stack,
        navigationOptions: {
          title: 'Places',
          tabBarIcon: ({ tintColor }) => {
            return <Ionicons name="md-locate" size={30} color={tintColor} />
          }
        }
      },
      sharePlace: {
        screen: SharePlace,
        navigationOptions: { title: 'Share Place' }
      }
    })

    AppContainer = createAppContainer(MainNavigator)
    return <AppContainer />
  }
}

const mapStateToProps = state => {
  return {
    places: state.placesReducer.places,
    key: state.placesReducer.key
  }
}

export default Home
