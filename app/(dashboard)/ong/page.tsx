import { PiChartLineUpDuotone, PiDotsThreeVertical } from "react-icons/pi";

export default function Page() {
  const items = [
    {
      title: "Economia gerada",
      value: 20450203.89
    },
    {
      title: "Quantidade parceiros",
      value: 1245094
    }
  ]

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-1/3 shrink-0 p-12 gap-12">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between py-2.5">
            <h4 className="text-xl">
              Indicadores
            </h4>

            <button>
              <PiDotsThreeVertical className="w-[2.2rem] h-[2.2rem]"/>
            </button>
          </div>
          
          <ul className="flex flex-col gap-3 w-full">
            {items.map(({ title, value }, key) => {
              const percent = Math.floor(Math.random() * (100 - 0)) + 0

              const Badge = () => {
                return (
                  <div className="flex items-center px-2 py-1 gap-2 bg-green-200 rounded-lg text-xs text-green-700">
                    <PiChartLineUpDuotone className="fill-green-700"/>
                    {percent}%
                  </div>
                )
              }

              return (
                <li key={key}>
                  <small className="text-zinc-500 text-xs">
                    {title}
                  </small>
                  <div className="flex items-center justify-between text-xl">
                    {value.toString()}

                    <Badge/>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <h4 className="text-xl">
            Estatísticas
          </h4>

        </div>
      </div>

      <div className="flex flex-col w-full p-12">
        
      </div>
    </div>
  )
}
