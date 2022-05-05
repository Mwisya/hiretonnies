import React from 'react'
import { Display, Advert, Footer, Nav, OurFleet, WhyChooseUs } from '../components/Index'

const Homepage = () => {
  return (
    <div>
     <Advert/>
      <Nav/>
     <Display/>
     <OurFleet/>
     <WhyChooseUs/>
     <Footer/>
    </div>
  )
}

export default Homepage