import { produce } from 'immer'

import { CartActionTypes } from './cartActions'
import { CoffeeCart } from './cartContext'

interface CartState {
  coffeesCart: CoffeeCart[]
}

export const INITIAL_STATE = {
  coffeesCart: [],
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_COFFEE: {
      return produce(state, (draft: CartState) => {
        const index = draft.coffeesCart.findIndex(
          (coffeeCart) => coffeeCart.coffee.id === action.payload.coffee.id,
        )

        if (index >= 0) {
          draft.coffeesCart[index].quantity = action.payload.quantity
        } else {
          draft.coffeesCart.push({
            coffee: action.payload.coffee,
            quantity: action.payload.quantity,
          })
        }
      })
    }

    case CartActionTypes.SET_QUANTITY: {
      return produce(state, (draft: CartState) => {
        const index = draft.coffeesCart.findIndex(
          (coffeeCart) => coffeeCart.coffee.id === action.payload.coffee.id,
        )

        if (index >= 0) {
          draft.coffeesCart[index].quantity += action.payload.quantity
        }
      })
    }

    default:
      return state
  }
}
