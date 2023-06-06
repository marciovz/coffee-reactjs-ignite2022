import { BannerHome } from '../../components/BannerHome'
import { CoffeeCard } from '../../components/CoffeeCard'
import { useCoffees, useCart } from '../../store/hooks'

import { CoffeeListContainer, CoffeeList } from './styles'

export function Home() {
  const { coffeeList } = useCoffees()
  const { addCoffeeToCart } = useCart()

  return (
    <>
      <BannerHome />
      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffeeList.map((item) => (
            <CoffeeCard
              key={item.id}
              coffee={item}
              onAddToCart={addCoffeeToCart}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}
