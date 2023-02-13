import React from 'react'

export default function CarouselModal({visible,handleOnClose,srcVideo}) {
    let handdleOnclose = (e) => { 
        if(e.target.id =='carouselModal'){ handleOnClose()}
     }
    if(!visible) return null
    return (
    <div style={{zIndex:'100000'}} onClick={handleOnClose} id='carouselModal'  className='inset-0 bg-black fixed  bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
       <div  style={{width:'900px',height:'auto'}}>
       <video src={srcVideo} preload="auto" autoplay="" style={{width:'100%',height:'auto'}}></video>

       </div>
    </div>
  )
}
