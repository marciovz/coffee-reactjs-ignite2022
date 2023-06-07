import { useState } from 'react'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'

import { Input } from '../../components/Form/Input'
import { PaymentTypeButton } from '../../components/Form/PaymentTypeButton'
import { CartOrderCard } from '../../components/CartOrderCard'

import {
  Container,
  ContainerForm,
  CardForm,
  CardFormHeader,
  Form,
  LineForm,
  PaymentContainer,
} from './styles'

type IPaymentType = 'credit' | 'debit' | 'cash'

export function Checkout() {
  const [paymentType, setPaymentType] = useState<IPaymentType>('credit')

  return (
    <Container>
      <ContainerForm>
        <h2>Complete seu pedido</h2>

        <CardForm>
          <CardFormHeader type="MapPinLine">
            <MapPinLine />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CardFormHeader>

          <Form>
            <LineForm cols="13rem 1fr">
              <Input name="cpf" placeholder="CPF" />
            </LineForm>
            <LineForm>
              <Input name="street" placeholder="Rua" />
            </LineForm>
            <LineForm cols="13rem 1fr">
              <Input name="number" placeholder="Número" />
              <Input name="complement" placeholder="Complemento" opcional />
            </LineForm>
            <LineForm cols="13rem 1fr 4rem">
              <Input name="neighborhood" placeholder="Bairro" />
              <Input name="city" placeholder="Cidade" />
              <Input name="uf" placeholder="UF" />
            </LineForm>
          </Form>
        </CardForm>

        <CardForm>
          <CardFormHeader type="CurrencyDollar">
            <CurrencyDollar />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CardFormHeader>

          <PaymentContainer>
            <PaymentTypeButton
              title="Cartão de Crédito"
              type="credit"
              isActive={paymentType === 'credit'}
              onClick={() => setPaymentType('credit')}
            />
            <PaymentTypeButton
              title="Cartão de Débito"
              type="debit"
              isActive={paymentType === 'debit'}
              onClick={() => setPaymentType('debit')}
            />
            <PaymentTypeButton
              title="Dinheiro"
              type="cash"
              isActive={paymentType === 'cash'}
              onClick={() => setPaymentType('cash')}
            />
          </PaymentContainer>
        </CardForm>
      </ContainerForm>

      <CartOrderCard />
    </Container>
  )
}
