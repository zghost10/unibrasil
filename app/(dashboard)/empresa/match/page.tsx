import { Button } from "@/components/Button";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-12 gap-8">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl font-medium">DEU MATCH!</h1>
        <hr className="h-px w-[8rem] border border-zinc-200"/>
        <p className="text-lg font-normal">Encontramos quem precisa da sua doação!</p>
      </div>

      <div className="flex justify-center">
        <div className="flex gap-3 w-full p-5 rounded bg-white">
          <div className="flex justify-center items-center w-[5rem] h-[5rem] bg-zinc-200">
            Logo
          </div>

          <div>
            <small className="text-xs text-zinc-400">Área de atuação</small>
            <h4 className="text-2xl font-medium">Nome da ONG</h4>
          </div>
        </div>
      </div>

      <div>
        <Button type="link">
          Conhecer
        </Button>
      </div>
    </div>
  )
}