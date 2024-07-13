import { DonationForm } from "@/components/DonationForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen p-12">
      <div className="grid grid-cols-3 gap-3 ">
        <Link href="#" className="flex flex-row gap-3 justify-start items-center p-12 w-full bg-white rounded-md">
          <div className="flex justify-center items-center w-[5rem] h-[5rem] bg-zinc-200">
            Logo
          </div>

          <div className="">
            <small className="text-xs text-zinc-400">Área de atuação</small>
            <h4 className="text-2xl font-medium">Nome da ONG</h4>
          </div>
        </Link>

        <Link href="#" className="flex flex-row gap-3 justify-start items-center p-12 w-full bg-white rounded-md">
          <div className="flex justify-center items-center w-[5rem] h-[5rem] bg-zinc-200">
            Logo
          </div>

          <div className="">
            <small className="text-xs text-zinc-400">Área de atuação</small>
            <h4 className="text-2xl font-medium">Nome da ONG</h4>
          </div>
        </Link>

        <Link href="#" className="flex flex-row gap-3 justify-start items-center p-12 w-full bg-white rounded-md">
          <div className="flex justify-center items-center w-[5rem] h-[5rem] bg-zinc-200">
            Logo
          </div>

          <div className="">
            <small className="text-xs text-zinc-400">Área de atuação</small>
            <h4 className="text-2xl font-medium">Nome da ONG</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}