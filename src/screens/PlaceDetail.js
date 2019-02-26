import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { deletePlace } from '../actions/index'

class PlaceDetail extends React.Component {
  state = { name: '', image: '' }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.placeName
    }
  }

  placeDeletedHandler = () => {
    this.props.deletePlace(this.props.navigation.state.params.key)
    this.props.navigation.pop()
  }

  componentDidMount = () => {
    const key = this.props.navigation.state.params.key
    if (key) {
      const { image, name } = this.props.places.find(place => {
        return place.key === key
      })
      this.setState({ name, image })
    }
  }

  render() {
    const { name, image } = this.state
    return (
      <View style={styles.container}>
        <View>
          <Image source={image} style={styles.placeImage} />
          <Text style={styles.placeName}>{name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Ionicons
                size={30}
                name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                color="red"
              />
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
  { deletePlace }
)(PlaceDetail)
