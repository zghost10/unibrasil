import { LoginForm } from "@/components/Login";
import { PiHandHeartFill } from "react-icons/pi";

export default function Page() {
  return (
    <div
      className="
        relative flex flex-col justify-center items-end p-16 gap-12 w-full h-screen 
        bg-gradient-to-l from-black to-paua-950
      "
    >
      <div className="flex flex-col bg-paua-950 p-12 gap-6 w-[24rem] rounded-md isolation z-[1]">
        <div className="flex flex-col items-center gap-1 text-xl">
          <PiHandHeartFill className="fill-white w-[2.8rem] h-[2.8rem]"/>
          Unibrasil
        </div>

        <LoginForm/>
      </div>

      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/backgrounds/work.jpg')`
        }}
      />
    </div>
  )
}