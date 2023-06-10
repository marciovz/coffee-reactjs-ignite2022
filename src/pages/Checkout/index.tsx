import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'

import { AddressForm } from '../../components/Form/AddressForm'
import { PaymentTypeButton } from '../../components/Form/PaymentTypeButton'
import { CartOrderCard } from '../../components/CartOrderCard'

import { api } from '../../services/api'
import { useCart, useOrder } from '../../store/hooks'

import {
  Container,
  ContainerForm,
  CardForm,
  CardFormHeader,
  PaymentContainer,
  PaymentError,
} from './styles'

type IPaymentType = 'credit' | 'debit' | 'cash' | 'none'

const addressFormValidatorSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP!').max(8, 'CEP inválido!').length(8),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
})

export type AddressFormData = zod.infer<typeof addressFormValidatorSchema>

export function Checkout() {
  const [paymentType, setPaymentType] = useState<IPaymentType>('none')
  const [isPaymentTypeError, setIsPaymentTypeError] = useState(false)

  const { coffeesCart, clearCoffeeCart } = useCart()
  const { saveOrder } = useOrder()
  const navigate = useNavigate()

  const dataForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidatorSchema),
  })

  const { handleSubmit } = dataForm

  function handleSetPaymentType(type: IPaymentType) {
    setPaymentType(type)
    setIsPaymentTypeError(false)
  }

  async function confirmOrder(data: AddressFormData) {
    const tax = 3.5

    if (paymentType === 'none') {
      setIsPaymentTypeError(true)
      return
    }

    const order = {
      date: new Date(),
      address: data,
      order: coffeesCart.map((orderItem) => ({
        id: orderItem.coffee.id,
        title: orderItem.coffee.title,
        price: orderItem.coffee.price,
        quantity: orderItem.quantity,
      })),
      paymentType,
      tax,
      total:
        coffeesCart.reduce((acc, cart) => {
          return (acc += cart.coffee.price * cart.quantity)
        }, 0) + tax,
    }

    try {
      await api.post('/coffeeCart', order)
      saveOrder(order)
      clearCoffeeCart()
      navigate('/success')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <FormProvider {...dataForm}>
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

            <AddressForm />
          </CardForm>

          <CardForm>
            <CardFormHeader type="CurrencyDollar">
              <CurrencyDollar />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CardFormHeader>

            <PaymentContainer>
              <PaymentTypeButton
                title="Cartão de Crédito"
                type="credit"
                isActive={paymentType === 'credit'}
                onClick={() => handleSetPaymentType('credit')}
              />
              <PaymentTypeButton
                title="Cartão de Débito"
                type="debit"
                isActive={paymentType === 'debit'}
                onClick={() => handleSetPaymentType('debit')}
              />
              <PaymentTypeButton
                title="Dinheiro"
                type="cash"
                isActive={paymentType === 'cash'}
                onClick={() => handleSetPaymentType('cash')}
              />
            </PaymentContainer>
            {isPaymentTypeError && (
              <PaymentError>
                <span>Selecione uma forma de pagamento</span>
              </PaymentError>
            )}
          </CardForm>
        </ContainerForm>
      </FormProvider>
      <CartOrderCard submitForm={handleSubmit(confirmOrder)} />
    </Container>
  )
}
