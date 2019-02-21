import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import placeImage from '../../src/assets/hotspot-highlight-munich.png'

class PlaceInput extends Component {
  state = {
    placeName: '',
    placeImage
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    const { placeName, placeImage, key } = this.state
    if (this.state.placeName.trim() === '') {
      return
    }
    this.props.onPlaceAdded(placeName, placeImage, key)
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 5
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
})

export default PlaceInput
