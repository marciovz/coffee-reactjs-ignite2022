import { useEffect, useState } from 'react'

import { api } from '../../services/api'
import { BannerHome } from '../../components/BannerHome'
import { CoffeeCard } from '../../components/CoffeeCard'

import { CoffeeListContainer, CoffeeList } from './styles'

interface ICoffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

export function Home() {
  const [coffeeList, setCoffeeList] = useState<ICoffee[]>([])

  function editShoppingCart() {}

  useEffect(() => {
    async function loadCoffees() {
      const requestData = await api.get('/coffeeList')
      setCoffeeList(requestData.data)
    }
    loadCoffees()
  }, [])

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
              onAddToCart={editShoppingCart}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}
