import { ReactNode, createContext, useReducer } from 'react'
import { INITIAL_STATE, CartReducer } from './cartReducer'
import { addCoffee, setQuantity } from './cartActions'

interface Coffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

export interface CoffeeCart {
  coffee: Coffee
  quantity: number
}

interface CartContextData {
  coffeesCart: CoffeeCart[]
  addCoffeeToCart: (coffeeCart: CoffeeCart) => void
  setCoffeeQuantity: (coffeeId: string, quantity: number) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, INITIAL_STATE)

  const { coffeesCart } = cartState

  function addCoffeeToCart(coffeeCart: CoffeeCart) {
    dispatch(addCoffee(coffeeCart))
  }

  function setCoffeeQuantity(coffeeId: string, quantity: number) {
    dispatch(setQuantity({ coffeeId, quantity }))
  }

  return (
    <CartContext.Provider
      value={{
        coffeesCart,
        addCoffeeToCart,
        setCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
