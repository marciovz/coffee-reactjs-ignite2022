import { useFormContext } from 'react-hook-form'

import { Input } from '../Input'

import { Form, LineForm } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType

  return (
    <Form>
      <LineForm cols="13rem 1fr">
        <Input placeholder="CEP" {...register('cep')} error={errors.cep} />
      </LineForm>
      <LineForm>
        <Input
          placeholder="Rua"
          {...register('street')}
          error={errors.street}
        />
      </LineForm>
      <LineForm cols="13rem 1fr">
        <Input
          placeholder="Número"
          {...register('number')}
          error={errors.number}
        />
        <Input
          placeholder="Complemento"
          {...register('complement')}
          error={errors.complement}
          opcional
        />
      </LineForm>
      <LineForm cols="13rem 1fr 4rem">
        <Input
          placeholder="Bairro"
          {...register('district')}
          error={errors.district}
        />
        <Input placeholder="Cidade" {...register('city')} error={errors.city} />
        <Input placeholder="UF" {...register('uf')} error={errors.uf} />
      </LineForm>
    </Form>
  )
}
