import { useMemo, useState } from 'react'
import { AddCartButton } from '../AddCartButton'
import { CounterButton } from '../CounterButton'
import { CardContainer, TagContainer, BuyContainer } from './styles'

interface Coffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

interface CoffeeCart {
  coffee: Coffee
  quantity: number
}

interface CoffeeCardProps {
  coffee: Coffee
  onAddToCart: (coffeeCart: CoffeeCart) => void
}

export function CoffeeCard({ coffee, onAddToCart }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const handleNewQuantity = (value: number) => {
    setQuantity(value)
  }

  function handleAddToCart() {
    if (quantity <= 0) return

    onAddToCart({ coffee, quantity })
  }

  const priceFormated = useMemo(() => {
    return coffee.price.toLocaleString('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }, [coffee.price])

  return (
    <CardContainer>
      <img src={`/images/${coffee.image}`} alt={`Chicará de ${coffee.title}`} />
      <TagContainer>
        {coffee.tag.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagContainer>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <BuyContainer>
        <p>
          <span>R$</span>
          {priceFormated}
        </p>
        <div>
          <CounterButton
            initialValue={1}
            minValue={1}
            maxValue={100}
            onClickIncrement={handleNewQuantity}
            onClickDecrement={handleNewQuantity}
          />
          <AddCartButton onClick={handleAddToCart} />
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
