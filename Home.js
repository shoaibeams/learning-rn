import React, { Component } from 'react'
import { Platform } from 'react-native'
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
import SideDrawer from './src/screens/SideDrawer'
import AuthScreen from './src/screens/AuthScreen'

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
        SideDrawer: { screen: stack }
      },
      {
        contentComponent: SideDrawer,
        drawerWidth: 160
      }
    )

    const MainNavigator = createBottomTabNavigator({
      sharePlace: {
        screen: SharePlace,
        navigationOptions: { title: 'Share Place' }
      },
      findPlace: {
        screen: stack,
        screen: drawer,
        navigationOptions: {
          title: 'Places',
          tabBarIcon: ({ tintColor }) => {
            return (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-locate' : 'ios-locate'}
                size={30}
                color={tintColor}
              />
            )
          }
        }
      },
      auth: { screen: AuthScreen }
    })

    AppContainer = createAppContainer(MainNavigator)
    return <AppContainer />
  }
}

export default Home
