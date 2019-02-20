import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import * as actions from '../actions'
import PlaceList from '../components/PlaceList'

class FindPlace extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Ionicons name="md-locate" size={30} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <PlaceList places={this.props.places} />
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
