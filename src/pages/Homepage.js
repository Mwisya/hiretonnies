import React from 'react'
import { Display, Footer, Nav, OurFleet, WhyChooseUs } from '../components/Index'

const Homepage = () => {
  return (
    <div>
      <Nav/>
     <Display/>
     <OurFleet/>
     <WhyChooseUs/>
     <Footer/>
    </div>
  )
}

export default Homepage