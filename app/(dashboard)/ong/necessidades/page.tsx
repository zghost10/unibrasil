'use client'
import { usePathname } from "next/navigation"

export default function Page() {
  const pathName = usePathname()

  return (
    <div className="flex w-full p-12">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-zinc-200 uppercase bg-paua-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tipo de Doação
              </th>
              <th scope="col" className="px-6 py-3">
                Especificações
              </th>
              <th scope="col" className="px-6 py-3">
                Periodicidade
              </th>
              <th scope="col" className="px-6 py-3">
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Produtos
              </th>
              <td className="px-6 py-4">
                Alimentos, Roupas, Produtos de Higiene
              </td>
              <td className="px-6 py-4">
                Pontual, Mensal
              </td>
              <td className="px-6 py-4 space-x-2">
                <a href={`${pathName}/produtos`} className="font-medium text-blue-600 hover:underline">Detalhes</a>
                <a href="#" className="font-medium text-blue-600 hover:underline">Editar</a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Serviços
              </th>
              <td className="px-6 py-4">
                Atendimento médico
              </td>
              <td className="px-6 py-4">
                Mensal
              </td>
              <td className="px-6 py-4 space-x-2">
                <a href={`${pathName}/servicos`} className="font-medium text-blue-600 hover:underline">Detalhes</a>
                <a href="#" className="font-medium text-blue-600 hover:underline">Editar</a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Dinheiro
              </th>
              <td className="px-6 py-4">
                Qualquer quantia
              </td>
              <td className="px-6 py-4">
                Pontual, Mensal
              </td>
              <td className="px-6 py-4 space-x-2">
                <a href={`${pathName}/dinheiro`} className="font-medium text-blue-600 hover:underline">Detalhes</a>
                <a href="#" className="font-medium text-blue-600 hover:underline">Editar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}