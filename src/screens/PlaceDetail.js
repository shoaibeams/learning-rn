import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

class PlaceDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.placeName
    }
  }

  render() {
    const key = this.props.navigation.state.params.key
    const { image, name } = this.props.places.find(place => {
      return place.key === key
    })

    return (
      <View style={styles.container}>
        <View>
          <Image source={image} style={styles.placeImage} />
          <Text style={styles.placeName}>{name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Ionicons size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    places: state.placesReducer.places
  }
}

export default connect(
  mapStateToProps,
  null
)(PlaceDetail)
