import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import imgIntro from '../../../assets/img-intro.svg'

import { Container, Content, ItemColumns, Item } from './styles'

export function BannerHome() {
  return (
    <Container>
      <Content>
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <ItemColumns>
            <div>
              <Item statusColor="yellowDark">
                <ShoppingCart size={32} weight="fill" />
                <p>Compra simples e segura</p>
              </Item>
              <Item statusColor="yellow">
                <Timer size={32} weight="fill" />
                <p>Entrega rápida e rastreada</p>
              </Item>
            </div>
            <div>
              <Item statusColor="grayDark">
                <Package size={32} weight="fill" />
                <p>Embalagem mantém o café intacto</p>
              </Item>
              <Item statusColor="purple">
                <Coffee size={32} weight="fill" />
                <p>O café chega fresquinho até você</p>
              </Item>
            </div>
          </ItemColumns>
        </section>

        <section>
          <img src={imgIntro} alt="" />
        </section>
      </Content>
    </Container>
  )
}
