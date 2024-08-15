import { Card, ICard } from "../card"

export type ICarousel = Readonly<{
    cards: Array<ICard>
}>

export function Carousel({ cards }: ICarousel) {

    return (
        <div>
            <Card { ...cards[0] } />
        </div>
    )
}