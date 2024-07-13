export default function Page() {

  return (
    <div className="flex w-full p-12">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-zinc-200 uppercase bg-paua-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                Produto
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
                Alimentos
              </th>
              <td className="px-6 py-4">
                Não perecíveis (arroz, feijão, macarrão)
              </td>
              <td className="px-6 py-4">
                Mensal
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Editar</a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Roupas
              </th>
              <td className="px-6 py-4">
                Adulto e infantil, todas as estações
              </td>
              <td className="px-6 py-4">
                Pontual
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Editar</a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Produtos de Higiene
              </th>
              <td className="px-6 py-4">
                Sabonete, pasta de dente, shampoo
              </td>
              <td className="px-6 py-4">
                Mensal
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Editar</a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Brinquedos
              </th>
              <td className="px-6 py-4">
                Jogos educativos, bonecas, carrinhos
              </td>
              <td className="px-6 py-4">
                Pontual
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Editar</a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Material Escolar
              </th>
              <td className="px-6 py-4">
                Cadernos, lápis, mochilas
              </td>
              <td className="px-6 py-4">
                Anual
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Editar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}