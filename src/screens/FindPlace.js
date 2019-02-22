import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import DrawerButton from '../components/DrawerButton'
import * as actions from '../actions'
import PlaceList from '../components/PlaceList'

class FindPlace extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <DrawerButton navigation={navigation} />
    }
  }

  itemSelectedHandler = (key, placeName) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'details',
      params: { key, placeName }
    })
    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.placesReducer.places
  }
}

export default connect(
  mapStateToProps,
  actions
)(FindPlace)
