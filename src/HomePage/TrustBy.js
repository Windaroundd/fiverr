import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function TrustBy() {
  return (
    <div className='trust-by py-10 mb-20'>
        <div className="container mx-auto">
            <div className="trust-by-content flex items-center justify-center">
                <span>Trust By: </span>
                <ul className='flex justify-evenly items-center space-x-3'>
                    <li>
                        <img src="http://demo5.cybersoft.edu.vn/img/fb.png" alt="" />
                    </li>
                    <li>
                        <img src="http://demo5.cybersoft.edu.vn/img/google.png" alt="" />
                    </li>
                    <li>
                        <img src="http://demo5.cybersoft.edu.vn/img/netflix.png" alt="" />
                    </li>
                    <li>
                        <img src="http://demo5.cybersoft.edu.vn/img/pg.png" alt="" />
                    </li>
                    <li className='hidden lg:block'>
                        <img src="http://demo5.cybersoft.edu.vn/img/paypal.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
