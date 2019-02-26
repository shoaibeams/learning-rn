import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Heading = props => {
  return (
    <Text {...props} style={[styles.textHeading, props.style]}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold'
  }
})

export default Heading
