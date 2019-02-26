import React, { Component } from 'react'
import { View, Button, Image, StyleSheet } from 'react-native'
import ImagePlaceholder from '../assets/hotspot-highlight-munich.png'

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={ImagePlaceholder} style={styles.previewImage} />
        </View>

        <View style={styles.button}>
          <Button title="Pick Image" onPress={() => alert('Pick Image')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center' },
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

export default PickImage
