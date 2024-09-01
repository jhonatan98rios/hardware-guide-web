"use client"

import { Card, ICard } from "../card"
import Flickity from 'react-flickity-component'

export type ICarousel = Readonly<{
    cards: Array<ICard>
}>

const flickityOptions = {
    initialIndex: 0
}

export function Carousel({ cards }: ICarousel) {
   
    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static={true} // default false
        >
            { cards.map(card => <Card { ...card } /> ) }
        </Flickity>
    )
}