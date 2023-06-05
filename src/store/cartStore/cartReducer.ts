import { CartActionTypes } from './cartActions'

interface CoffeeCart {
  coffeeId: string
  quantity: number
}

interface CartState {
  coffeesCart: CoffeeCart[]
}

export const INITIAL_STATE = {
  coffeesCart: [],
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_COFFEE: {
      const coffees = [...state.coffeesCart]

      const index = coffees.findIndex(
        (coffee) => coffee.coffeeId === action.payload.coffeeId,
      )

      if (index >= 0) {
        coffees[index].quantity += action.payload.quantity
      } else {
        coffees.push({
          coffeeId: action.payload.coffeeId,
          quantity: action.payload.quantity,
        })
      }

      return {
        ...state,
        coffeesCart: coffees,
      }
    }

    case CartActionTypes.SET_QUANTITY: {
      const coffees = [...state.coffeesCart]

      const index = coffees.findIndex(
        (coffee) => coffee.coffeeId === action.payload.coffeeId,
      )

      if (index >= 0) {
        coffees[index].quantity = action.payload.quantity
      }
      return {
        ...state,
        coffeesCart: coffees,
      }
    }

    default:
      return state
  }
}
