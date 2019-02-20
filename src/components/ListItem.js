import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

const listItem = props => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image
          source={props.placeImage}
          resizeMode="cover"
          style={styles.placeImage}
        />
        <Text> {props.placeName} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    paddingTop: 30,
    margin: 5,
    marginBottom: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
})

export default listItem
