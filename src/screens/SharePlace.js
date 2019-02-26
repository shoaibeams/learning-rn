import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Platform
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PlaceInput from '../components/PlaceInput'
import { connect } from 'react-redux'
import * as actions from '../actions'
import MainText from '../components/ui/MainText'
import Heading from '../components/ui/Heading'
import PickImage from '../components/PickImage'
import PickLocation from '../components/PickLocation'
import placeImage from '../../src/assets/hotspot-highlight-munich.png'

class SharePlace extends Component {
  state = {
    placeName: '',
    placeImage: placeImage
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-share-alt' : 'ios-share'}
          size={30}
          color={tintColor}
        />
      )
    }
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== '') {
      this.props.addPlace(this.state.placeName, this.state.placeImage)
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <Heading>
              <Text>Share a place with us</Text>
            </Heading>
          </MainText>

          <PickImage />
          <PickLocation />

          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button title="Share the place" onPress={this.placeAddedHandler} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  button: {
    margin: 10
  },
  previewImage: {
    width: '100%',
    height: '100%'
  }
})

const mapStateToProps = state => {
  return {
    places: state.placesReducer.places
  }
}

export default connect(
  mapStateToProps,
  actions
)(SharePlace)
