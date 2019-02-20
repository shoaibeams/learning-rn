// import React from 'react'
// import { StyleSheet, View } from 'react-native'
// import { connect } from 'react-redux'
// import {
//   addPlace,
//   deletePlace,
//   selectPlace,
//   deselectPlace
// } from './src/actions/index'
// import PlaceList from './src/components/PlaceList/PlaceList'
// import PlaceInput from './src/components/PlaceInput/PlaceInput'
// import placeImage from './src/assets/hotspot-highlight-munich.png'
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

// class Home extends React.Component {
//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName, placeImage)
//   }

//   selectedPlaceHandler = key => {
//     this.props.onSelectPlace(key)
//   }

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace()
//   }

//   modalCloseHandler = () => {
//     this.props.onDeselectPlace()
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetail
//           selectedPlace={this.props.selectedPlace}
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClose={this.modalCloseHandler}
//         />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList
//           places={this.props.places}
//           onItemSelected={this.selectedPlaceHandler}
//         />
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start'
//   }
// })

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name, image) => dispatch(addPlace(name, image)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: key => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home)
