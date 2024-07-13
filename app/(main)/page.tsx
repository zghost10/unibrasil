import Link from "next/link";
import { PiBuildings, PiHandHeart, PiHandHeartFill } from "react-icons/pi";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12 w-full h-screen bg-paua-950">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <PiHandHeartFill className="fill-white w-[2.2rem] h-[2.2rem]"/>
            Unibrasil
          </div>

          <div className="flex flex-col justify-center items-center">
            <h5 className="font-medium text-xl">
              Realizando conexões solidárias
            </h5>
            <h1 className="font-medium text-4xl">
              Como você deseja atuar?
            </h1>
          </div>
        </div>
        
        <div className="w-full flex justify-center items-center gap-6">
          <Link 
            href="/empresa" 
            className="uppercase flex flex-col justify-between items-center px-12 py-12 gap-3 w-[22rem] bg-paua-800 hover:bg-paua-900 text-zinc-200 hover:text-white rounded-md border border-2 border-transparent hover:border-white"
          >
            <PiBuildings className="w-[3rem] h-[3rem]"/>
            <div className="flex flex-col items-center justify-center">
              Sou empresa
              <small className="text-xs font-medium text-zinc-400 text-center">
                (quero doar!)
              </small>
            </div>
          </Link>

          <Link 
            href="/ong" 
            className="uppercase flex flex-col justify-between items-center px-24 py-12 gap-3 w-[22rem] bg-paua-800 hover:bg-paua-900 text-zinc-200 hover:text-white rounded-md border border-2 border-transparent hover:border-white"
          >
            <PiHandHeart className="w-[3rem] h-[3rem]"/>
            <div className="flex flex-col items-center justify-center">
              Sou ONG
              <small className="text-xs font-medium text-zinc-400 text-center">
                (preciso de doações!)
              </small>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}