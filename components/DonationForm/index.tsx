'use client'
import { useForm } from "react-hook-form"
import { Button } from "../Button"

export const DonationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const getErrorMessage = (error: any) => {
    if (typeof error === 'string') {
      return error
    } else if (error?.message) {
      return error.message
    }
    return null
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
      <div className="w-full">
        <label
          htmlFor="companyName"
          className="flex items-center h-full text-start text-sm font-semibold leading-6 mb-1"
        >
          Nome da Empresa
        </label>
        
        <div>
          <input
            type="text"
            {...register('companyName', { required: 'Nome da Empresa é obrigatório' })}
            placeholder="Nome da Empresa"
            className="block bg-gray-800 w-full h-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-ledax-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ledax-600 sm:text-sm sm:leading-6"
          />
          {errors.companyName && <span className="text-red-500 text-sm">{getErrorMessage(errors.companyName)}</span>}
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="address"
          className="flex items-center h-full text-start text-sm font-semibold leading-6 mb-1"
        >
          Endereço
        </label>
        <div>
          <input
            type="text"
            {...register('address', { required: 'Endereço é obrigatório' })}
            placeholder="Endereço"
            className="block bg-gray-800 w-full h-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-ledax-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ledax-600 sm:text-sm sm:leading-6"
          />
          {errors.address && <span className="text-red-500 text-sm">{getErrorMessage(errors.address)}</span>}
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="phone"
          className="flex items-center h-full text-start text-sm font-semibold leading-6 mb-1"
        >
          Telefone
        </label>
        <div>
          <input
            type="tel"
            {...register('phone', { required: 'Telefone é obrigatório' })}
            placeholder="Telefone"
            className="block bg-gray-800 w-full h-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-ledax-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ledax-600 sm:text-sm sm:leading-6"
          />
          {errors.phone && <span className="text-red-500 text-sm">{getErrorMessage(errors.phone)}</span>}
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="email"
          className="flex items-center h-full text-start text-sm font-semibold leading-6 mb-1"
        >
          Email
        </label>
        <div>
          <input
            type="email"
            {...register('email', { required: 'Email é obrigatório' })}
            placeholder="Email"
            className="block bg-gray-800 w-full h-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-ledax-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ledax-600 sm:text-sm sm:leading-6"
          />
          {errors.email && <span className="text-red-500 text-sm">{getErrorMessage(errors.email)}</span>}
        </div>
      </div>

      <Button type="button" className="w-full" submit>
        Cadastrar
      </Button>
    </form>
  )
}