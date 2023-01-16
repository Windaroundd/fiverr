import React from 'react'
import Carousel from './Carousel'
import Infor from './Infor'
import SliderItem from './SliderItem'

export default function HomePage() {
  return (
    <div className='overflow-x-hidden mx-auto space-y-20'>
        <SliderItem/>
        <Infor/>
        <Carousel/>

      <h2>hello</h2>
    </div>
  )
}
