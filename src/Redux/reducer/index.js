import { ADD_COUNTER, DELETE_CHECKOUT, MIN_COUNTER } from '../actions/constant'
import initialData from './dataDummy'

const reducer = (state = initialData, action) => {
  let productList = state.productList
  let checkout = state.checkout
  switch (action.type) {
    case ADD_COUNTER:
      let productForAdd = productList.find(
        value => value.id === action.payload.productId
      )
      for (let index = 0; index < productList.length; index++) {
        if (productList[index].id === productForAdd.id) {
          productList[index].counter = action.payload.counter
        }
      }

      let newChecoutDataforAdd = checkout.find(
        value => value.productId === action.payload.productId
      )
      if (newChecoutDataforAdd) {
        for (let index = 0; index < checkout.length; index++) {
          if (checkout[index].productId === newChecoutDataforAdd.productId) {
            checkout[index].counter = action.payload.counter
          }
        }
      } else {
        checkout = [...state.checkout, action.payload]
      }

      return { productList: productList, checkout: checkout }

    case MIN_COUNTER:
      let productForMin = productList.find(
        value => value.id === action.payload.productId
      )
      for (let index = 0; index < productList.length; index++) {
        if (productList[index].id === productForMin.id) {
          productList[index].counter = action.payload.counter
        }
      }

      let newCheckoutDataForMin = checkout.find(
        value => value.productId === action.payload.productId
      )
      if (newCheckoutDataForMin) {
        for (let index = 0; index < checkout.length; index++) {
          if (checkout[index].productId === newCheckoutDataForMin.productId) {
            checkout[index].counter = action.payload.counter
          }
        }
      } else {
        checkout = [...state.checkout, action.payload]
      }
      return { productList: productList, checkout: checkout }

    case DELETE_CHECKOUT:
      return
    default:
      return state
  }
}

export default reducer
