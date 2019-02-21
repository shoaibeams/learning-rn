import React, { Component } from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PlaceInput from '../components/PlaceInput'
import { connect } from 'react-redux'
import * as actions from '../actions'

class SharePlace extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Ionicons name="md-share-alt" size={30} color={tintColor} />
    }
  }

  placeAddedHandler = (placeName, placeImage, key) => {
    this.props.addPlace(placeName, placeImage, key)
  }

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
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
)(SharePlace)
