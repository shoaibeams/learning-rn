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

  placeAddedHandler = (placeName, placeImage) => {
    this.props.addPlace(placeName, placeImage)
  }

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    )
  }
}

export default connect(
  null,
  actions
)(SharePlace)
