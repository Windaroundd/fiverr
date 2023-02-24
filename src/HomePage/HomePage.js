import React from 'react'
import Banner from './Banner'
import Carousel from './Carousel'
import Infor from './Infor'
import SliderItem from './SliderItem'
import Testimonial from './Testimonial'
import TrustBy from './TrustBy'

export default function HomePage() {
  return (
    <div className='overflow-x-hidden  mx-auto '>
        <Banner/>
        <TrustBy/>
        <SliderItem/>
        <Infor/>
        <Carousel/>
        <Testimonial/>
    </div>
  )
}
