import React from 'react'
import './display.css'
import display from '../../assets/displaysteering.jpeg'

const Display = () => {
  return (
    <main className='display'>

          <div className="image-container">
              <img src={display} alt="" className='bg-img'/>
          </div>

        <div className='info'>
        <h2>IF YOU WANT TO RIDE THE BEST <span>WHEELS</span> </h2>
        <button >Book a ride</button>
        </div>
        
    </main>
  )
}

export default Display