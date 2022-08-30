import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import imgIntro from '../../../assets/img-intro.svg'

import {
  IntroContainer,
  IntroContent,
  IntroItemColumns,
  IntroItem,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <IntroItemColumns>
            <div>
              <IntroItem statusColor="yellowDark">
                <ShoppingCart size={32} weight="fill" />
                <p>Compra simples e segura</p>
              </IntroItem>
              <IntroItem statusColor="yellow">
                <Timer size={32} weight="fill" />
                <p>Entrega rápida e rastreada</p>
              </IntroItem>
            </div>
            <div>
              <IntroItem statusColor="grayDark">
                <Package size={32} weight="fill" />
                <p>Embalagem mantém o café intacto</p>
              </IntroItem>
              <IntroItem statusColor="purple">
                <Coffee size={32} weight="fill" />
                <p>O café chega fresquinho até você</p>
              </IntroItem>
            </div>
          </IntroItemColumns>
        </section>

        <section>
          <img src={imgIntro} alt="" />
        </section>
      </IntroContent>
    </IntroContainer>
  )
}
