import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'

import PlaceDetail from './src/screens/PlaceDetail'
import SharePlace from './src/screens/SharePlace'
import FindPlace from './src/screens/FindPlace'
import SlideDrawer from './src/screens/SlideDrawer'

class Home extends Component {
  render() {
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

    const drawer = createDrawerNavigator(
      {
        SlideDrawer: { screen: stack }
      },
      {
        contentComponent: SlideDrawer,
        drawerWidth: 160
      }
    )

    const MainNavigator = createBottomTabNavigator({
      findPlace: {
        screen: stack,
        screen: drawer,
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

export default Home
