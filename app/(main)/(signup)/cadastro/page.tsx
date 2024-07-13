import { CreateCompany } from "@/components/CreateCompany";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-paua-950">
      <div className="flex flex-col justify-center items-center p-12 w-[22rem] bg-paua-900 rounded-md">
        <CreateCompany/>
      </div>
    </div>
  )
}
