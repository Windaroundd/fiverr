import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { jobSevice } from './../../services/jobService';
import { useState } from 'react';

export default function ItemDetail() {
  const [detail,setDetail] = useState()
  let detailItem = useSelector((state) => { 
    return state.headerItem.id
   })
    useEffect(() => { 
      jobSevice.getJobList(detailItem)
       .then((res) => {
         console.log(res.data.content);
         console.log('res.data.content: ', res.data.content);
         setDetail(res.data.content)
       })
       .catch((err) => {
         console.log(err);
            });  
     },[detailItem])
     const mapItem = () => { 
      console.log(detail);
      if(detail!==undefined){
        console.log('detail.dsNhomChiTietLoai', detail.dsNhomChiTietLoai);
      return detail[0].dsNhomChiTietLoai.map((item)=>{
        return <div>
          <h2>{item.tenNhom}</h2>
        </div>
      })
      }else{
        return <></>
      }
      }
    return (
    <div>
      <p className='text-lg text-left'>{mapItem()}</p>
    </div>
  )
}
