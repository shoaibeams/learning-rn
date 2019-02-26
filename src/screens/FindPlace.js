import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import DrawerButton from '../components/DrawerButton'
import * as actions from '../actions'
import PlaceList from '../components/PlaceList'

class FindPlace extends Component {
  state = { placesLoaded: false, removeAnimation: new Animated.Value(1) }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <DrawerButton navigation={navigation} />
    }
  }

  itemSelectedHandler = (key, placeName) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'details',
      params: { key, placeName }
    })
    this.props.navigation.dispatch(navigateAction)
  }

  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  render() {
    let content = (
      <Animated.View
        style={{
          opacity: this.state.removeAnimation,
          transform: [
            {
              scale: this.state.removeAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 1]
              })
            }
          ]
        }}
      >
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    )
    if (this.state.placesLoaded) {
      content = (
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      )
    }
    return (
      <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchButton: {
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 26
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
)(FindPlace)
