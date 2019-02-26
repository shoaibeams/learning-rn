import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const Input = props => {
  return (
    <View>
      <TextInput {...props} style={[styles.input, props.style]} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    marginTop: 8,
    marginBottom: 8
  }
})

export default Input
