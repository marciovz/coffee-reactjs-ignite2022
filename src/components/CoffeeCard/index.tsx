import { useState } from 'react'
import { AddCartButton } from '../AddCartButton'
import { CounterButton } from '../CounterButton'
import { CardContainer, TagContainer, BuyContainer } from './styles'

interface ICoffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

interface IAddToCartParams {
  id: string
  quantity: number
}

interface ICoffeeCardProps {
  coffee: ICoffee
  onAddToCart: (addToCartParams: IAddToCartParams) => void
}

export function CoffeeCard({ coffee, onAddToCart }: ICoffeeCardProps) {
  const [quantity, setQuantity] = useState(0)

  const handleNewQuantity = (value: number) => {
    setQuantity(value)
  }

  const handleAddToCart = () => {
    if (quantity <= 0) return

    onAddToCart({
      id: coffee.id,
      quantity,
    })
  }

  const priceFormated = '9,90'

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
            initialValue={0}
            minValue={0}
            maxValue={100}
            onClick={handleNewQuantity}
          />
          <AddCartButton onClick={handleAddToCart} />
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
