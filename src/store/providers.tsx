import { ReactNode } from 'react'

import { CoffeesProvider } from './coffeesStore/coffeesContext'
import { CartProvider } from './cartStore/cartContext'
import { OrderProvider } from './orderStore/orderContext'

interface ProvidersProps {
  children: ReactNode
}

export function ProvidersStore({ children }: ProvidersProps) {
  return (
    <CoffeesProvider>
      <CartProvider>
        <OrderProvider>{children}</OrderProvider>
      </CartProvider>
    </CoffeesProvider>
  )
}
