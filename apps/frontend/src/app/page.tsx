import LogoGrande from "@/components/template/LogoGrande"
import Link from "next/link"

export default function Home() {
  return (
    <div className="
      h-screen flex flex-col justify-center items-center gap-10 bg-[url('/background-inicio.svg')] bg-cover 
    ">
      <div>
        <LogoGrande />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">Crie e gerencie o convite do seu evento de forma rápida e fácil, sem complicações</p>
      </div>
      <Link href="/evento" className="botao azul text-lg uppercase">Crie o seu evento</Link>
    </div>
  )
}