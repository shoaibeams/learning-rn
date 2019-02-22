import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation'
import DrawerButton from '../components/DrawerButton'

class SlideDrawer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <DrawerButton navigation={navigation} />
    }
  }
  render() {
    return (
      <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          <Text>Drawer Here</Text>
          {/* <DrawerItems /> */}
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SlideDrawer
