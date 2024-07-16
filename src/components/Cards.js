import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this EPIC destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services' />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a private cruise'
                            label='Luxry'
                            path='/services' />
                    </div>
                    <div className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services' />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a private cruise'
                            label='Luxry'
                            path='/services' />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a private cruise'
                            label='Luxry'
                            path='/services' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
