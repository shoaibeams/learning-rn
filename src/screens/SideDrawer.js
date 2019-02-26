import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation'
import DrawerButton from '../components/DrawerButton'
import { Ionicons } from '@expo/vector-icons'

class SideDrawer extends Component {
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
          <TouchableOpacity>
            <View style={styles.drawerItem}>
              <Ionicons
                size={30}
                name={Platform.OS === 'android' ? 'md-log-in' : 'ios-log-in'}
                color="#aaa"
                style={styles.drawerItemIcon}
              />
              <Text>Sign In</Text>
            </View>
            <View style={styles.drawerItem}>
              <Ionicons
                size={30}
                name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
                color="#aaa"
                style={styles.drawerItemIcon}
              />
              <Text>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee'
  },
  drawerItemIcon: {
    marginRight: 10
  }
})

export default SideDrawer
