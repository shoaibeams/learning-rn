import React from 'react'
import { TouchableOpacity, View, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const DrawerButton = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.openDrawer()
        }}
        style={{ paddingLeft: 5 }}
      >
        <Ionicons
          name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          size={30}
          color="black"
        />
      </TouchableOpacity>
    </View>
  )
}

export default DrawerButton
