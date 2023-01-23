import React from 'react'
import Footer from './Footer';

export default function Layout({children}) {
  return (
    <div className='space-y-20'>
      {children}
      <Footer/>  

    </div>
  )
}
