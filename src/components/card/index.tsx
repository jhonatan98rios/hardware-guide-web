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

export function Card({ name, cpu, gpu, ram }: ICard) {
    return (
        <div>
            <div> { name } </div>
            <div> { cpu } </div>
            <div> { gpu } </div>
            <div> { ram } </div>
        </div>
    )
}