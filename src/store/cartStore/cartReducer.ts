import { produce } from 'immer'

import { CartActionTypes } from './cartActions'
import { CoffeeCart } from './cartContext'
import { getCoffeesCart, saveCoffeeCart, removeCoffeeCart } from './cartStorage'

interface CartState {
  coffeesCart: CoffeeCart[]
}

export const INITIAL_STATE = {
  coffeesCart: getCoffeesCart(),
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
        saveCoffeeCart(draft.coffeesCart)
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
        saveCoffeeCart(draft.coffeesCart)
      })
    }

    case CartActionTypes.INCREMENT_QUANTITY: {
      return produce(state, (draft) => {
        const index = draft.coffeesCart.findIndex(
          (coffeeCart) => coffeeCart.coffee.id === action.payload.id,
        )

        if (index >= 0) {
          draft.coffeesCart[index].quantity += 1
        }
        saveCoffeeCart(draft.coffeesCart)
      })
    }

    case CartActionTypes.DECREMENT_QUANTITY: {
      return produce(state, (draft) => {
        const index = draft.coffeesCart.findIndex(
          (coffeeCart) => coffeeCart.coffee.id === action.payload.id,
        )

        if (index >= 0) {
          draft.coffeesCart[index].quantity -= 1
        }
        saveCoffeeCart(draft.coffeesCart)
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
        saveCoffeeCart(draft.coffeesCart)
      })
    }

    case CartActionTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.coffeesCart = []
        removeCoffeeCart()
      })
    }

    default:
      return state
  }
}
