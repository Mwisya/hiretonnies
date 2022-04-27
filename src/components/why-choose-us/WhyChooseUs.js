import { Timeline, Watch, WorkOutline } from '@material-ui/icons'
import React from 'react'
import './whychooseus.css'

const WhyChooseUs = () => {
  return (
    <section >
      <div className="container">

      <h2>Why choose Us</h2>
          <div className="cards">

          <div className='card'>
            <WorkOutline/>
            <h3>We are reliable</h3>
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione dignissimos numquam harum quo omnis esse officiis fugiat autem.</article>
          </div>
          <div className='card'>
            <Timeline/>
            <h3>Luxury cars</h3>
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione dignissimos numquam harum quo omnis esse officiis fugiat autem.</article>
          </div>
          <div className='card'>
            <Watch/>
            <h3>24/7 operation</h3>
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione dignissimos numquam harum quo omnis esse officiis fugiat autem.</article>
          </div>
        </div>
    </div>
    </section>
  )
}

export default WhyChooseUs