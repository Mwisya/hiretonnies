import React from 'react'
import './book.css'
import { Call, Email, WhatsApp } from '@material-ui/icons'
import display from '../../assets/displaysteering.jpeg'


const Book = () => {

// const callus = ()=>{
  
// }

  return (
    <div className='booking'>
      <div className="booking_contacts">
        <p> <Call/> <a href="tel:+254719580450">+254719580450</a></p>
        <p> <Call/> <a href="tel:+254719580450">+254719580450</a></p>
        <p> <Email/> <a href="mailto:">wheels001@gmail.com</a></p>
        <p> <WhatsApp/> <a href="http://">WhatsApp</a></p>
      </div>
    </div>
  )
}

export default Book