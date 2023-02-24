import React from 'react'

export default function InfoModal({visible,onClose}) {
    const handleOnClose = (event) => {
        if(event.target.id ==='container'){ 
        onClose()
        }
     }
    if(!visible) return null
  return (
    <div style={{zIndex:'100000'}} onClick={handleOnClose} id='container' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className="bg-white p-2 rounded">
      <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" preload="auto" autoplay="" style={{width:'100%',height:'auto'}}></video>
        </div>  
    </div>
  )
}
