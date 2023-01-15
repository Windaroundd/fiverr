import React from 'react'
import Infor from './Infor'
import SliderItem from './SliderItem'

export default function HomePage() {
  return (
    <div className='overflow-x-hidden mx-auto space-y-20'>
        <SliderItem/>
        <Infor/>
    </div>
  )
}
