import { CoffeeCart } from './cartContext'

const CART_COLLECTION = '@ignite-coffee:cart-0.0.1'

export function GetCoffeesCart() {
  const storage = localStorage.getItem(CART_COLLECTION)
  const coffeesCart: CoffeeCart[] = storage ? JSON.parse(storage) : []
  return coffeesCart
}

export function SaveCoffeeCart(coffeesCart: CoffeeCart[]) {
  localStorage.setItem(CART_COLLECTION, JSON.stringify(coffeesCart))
}
