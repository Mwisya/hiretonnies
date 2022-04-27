import { Email,WhatsApp,Instagram,Facebook, LocationOn, Call, ArrowForward } from '@material-ui/icons'
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer >
      <div className='container'>

      <div className="services">
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
          <p><Email/> Email: wheelske@gmail.com</p>
          <p> <Call/> +25419580450 </p>
          <p> <Call/> +25419580450 </p>
      </div>


         <div className='social-media'>
                <h2>Follow Us</h2>
              <div className='social_media-icons'>
                <a href="mailto:HAsc@gmail.com" className='icon_color'><Email/></a>
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