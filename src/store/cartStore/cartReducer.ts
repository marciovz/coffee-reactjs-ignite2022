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
      return produce(state, (draft) => {
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
      return produce(state, (draft) => {
        const index = draft.coffeesCart.findIndex(
          (coffeeCart) => coffeeCart.coffee.id === action.payload.id,
        )

        if (index >= 0) {
          draft.coffeesCart[index].quantity += action.payload.quantity
        }
      })
    }

    case CartActionTypes.INCREMENT_QUANTITY: {
      return produce(state, (draft) => {
        const index = draft.coffeesCart.findIndex(
          (coffeeCart) => coffeeCart.coffee.id === action.payload.id,
        )

        if (index >= 0) {
          draft.coffeesCart[index].quantity =
            draft.coffeesCart[index].quantity + 1
        }
      })
    }

    case CartActionTypes.DECREMENT_QUANTITY: {
      return produce(state, (draft) => {
        const index = draft.coffeesCart.findIndex(
          (coffeeCart) => coffeeCart.coffee.id === action.payload.id,
        )

        if (index >= 0) {
          draft.coffeesCart[index].quantity =
            draft.coffeesCart[index].quantity - 1
        }
      })
    }

    case CartActionTypes.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        const index = draft.coffeesCart.findIndex(
          (coffeeCart) => coffeeCart.coffee.id === action.payload.id,
        )

        if (index >= 0) {
          draft.coffeesCart.splice(index, 1)
        }
      })
    }

    default:
      return state
  }
}
