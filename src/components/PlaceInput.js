import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import placeImage from '../../src/assets/hotspot-highlight-munich.png'
import Input from '../components/ui/Input'

const PlaceInput = props => {
  return (
    <Input
      placeholder="Place Name"
      value={props.placeName}
      onChangeText={props.onChangeText}
    />
  )
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
