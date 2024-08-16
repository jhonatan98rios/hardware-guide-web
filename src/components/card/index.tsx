import Image from "next/image"
import Link from "next/link"

export type ICard = Readonly<{
    image: string
    name: string
    link: string
    moba: string
    cpu: string
    storage: string
    ram: string
    gpu: string
    screen: string
    so: string
    price: string
}>

export function Card({ name, cpu, gpu, ram, storage, image, link, moba, price, screen, so }: ICard) {
    return (
        <div className="flex flex-col w-[400px] h-[270px] mx-3 justify-center items-center 
            border-2 border-[#4CC392] border-solid rounded-3xl p-8 bg-white text-slate-800">
            <Link href={link} target="_blank" referrerPolicy="no-referrer">
                <strong className="text-[#4CC392] text-lg"> { name } </strong>
            </Link>
            <p> CPU: { cpu } </p>
            { moba && <p> Placa mãe: {moba}  </p> }
            <p> Armazenamento: { storage } </p>
            <p> RAM: { ram } </p>
            <p> GPU: { gpu } </p>
            { screen && <p> Tela: { screen } </p> }
            { so && <p> Sistema operacional: { so } </p> }
            <strong> Valor aproximado: { price } </strong>
        </div>
    )
}