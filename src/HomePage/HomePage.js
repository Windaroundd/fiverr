import React from 'react'
import Banner from './Banner'
import Carousel from './Carousel'
import Infor from './Infor'
import SliderItem from './SliderItem'
import Testimonial from './Testimonial'

export default function HomePage() {
  return (
    <div className='overflow-x-hidden  mx-auto space-y-20'>
        <Banner/>
        <SliderItem/>
        <Infor/>
        <Carousel/>
        <Testimonial/>
    </div>
  )
}
