import { Email,WhatsApp,Instagram,Facebook, LocationOn, Call, ArrowForward } from '@material-ui/icons'
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer id='location' >
      <div className='container'>

      <div id='services' className="services">
         <h2>Our Services</h2>
         <p><ArrowForward/> Personal drives</p>
         <p><ArrowForward/> Chauffer drives</p>
         <p><ArrowForward/> Airport transport</p>
         <p><ArrowForward/> SGR transport</p>
        <p> <ArrowForward/>Weddings</p>
      </div>

      <div className="contacts">
        <h2>Contact Us</h2>
          <p> <LocationOn /> Location: Moi Avenue</p>
          <p><Email/> <a href="mailto:">wheelske@gmail.com</a> </p>
          <p> <Call/> <a href="tel:+25419580450">+25419580450</a> </p>
          <p> <Call/> <a href="tel:+25419580450">Call Us</a> </p>
      </div>


         <div className='social-media'>
                <h2>Follow Us</h2>
              <div className='social_media-icons'>
                <a href="mailto:" className='icon_color'><Email/></a>
                <a href="http://api.whatsapp.com/send?phone=+25419580450" className='icon_color'><WhatsApp/></a>
                <a href="http://" className='icon_color'><Instagram/></a>
                <a href="http://" className='icon_color'><Facebook/></a>
                
              </div>
          </div>
       </div>
    </footer>
  )
}

export default Footer