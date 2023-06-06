import { ReactNode } from 'react'

import { CoffeesProvider } from './coffeesStore/coffeesContext'
import { CartProvider } from './cartStore/cartContext'

interface ProvidersProps {
  children: ReactNode
}

export function ProvidersStore({ children }: ProvidersProps) {
  return (
    <CoffeesProvider>
      <CartProvider>{children}</CartProvider>
    </CoffeesProvider>
  )
}
