import { MapPin, ShoppingCart } from 'phosphor-react'
// import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <nav>
        <span>
          <MapPin size={32} weight="fill" />
          Porto Alegre, RS
        </span>
        <a href="#" title="cart">
          <ShoppingCart size={32} weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
