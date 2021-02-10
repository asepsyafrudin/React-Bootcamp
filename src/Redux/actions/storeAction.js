import { ADD_COUNTER, DELETE_CHECKOUT, MIN_COUNTER } from './constant'

export const addCounter = payload => {
  return {
    type: ADD_COUNTER,
    payload
  }
}

export const minCounter = payload => {
  return {
    type: MIN_COUNTER,
    payload
  }
}

export const deleteCheckout = payload => {
  return {
    type: DELETE_CHECKOUT,
    chekoutId: payload.checoutId
  }
}
