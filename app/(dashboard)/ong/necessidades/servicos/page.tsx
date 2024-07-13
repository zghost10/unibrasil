export default function Page() {
  return (
    <div className="flex w-full p-12">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-zinc-200 uppercase bg-paua-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                Serviço
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
                Atendimento Médico
              </th>
              <td className="px-6 py-4">
                Clínico geral, pediatria, odontologia
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
                Serviços de Educação
              </th>
              <td className="px-6 py-4">
                Aulas de reforço, cursos profissionalizantes
              </td>
              <td className="px-6 py-4">
                Semanal
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