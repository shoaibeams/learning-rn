import { ADD_PLACE, DELETE_PLACE } from './types'

export const addPlace = (placeName, placeImage) => {
  return {
    type: ADD_PLACE,
    placeName,
    placeImage
  }
}

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  }
}
