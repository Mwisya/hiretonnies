import { Close,Email, MenuOutlined, WhatsApp} from '@material-ui/icons'

import React, {useState} from 'react'
import { Menu } from '../Index'
import './navbar.css'



const Navbar = ({onClick}) => {
    const [toggle, setToggle]= useState(false)

    function open (){
        setToggle(true)
    }

   
    return (
        <div className="navbar_container">

            <div className="logo">
                <h2>Wheels<span>ke</span></h2>
            </div>

            <nav className='navigation__links-container'>
                <Menu/>
            </nav>

            <div className='navigation__menu-container' >

                { toggle ? 
                     <Close className='close-btn' onClick={()=> {setToggle(false)}}/>:
                    <MenuOutlined className='menu__icon' onClick={open}/>
                }

            {
                toggle &&  (
                  <div className='menu_active'>
                      <Menu />
                     <div className="social_media-nav">
                        <div className="social__media-container">
                            <a href="https://api.whatsapp.com/send?phone=+254722799775" target='_blank' rel="noreferrer"> <WhatsApp/> WhatsApp </a>
                            
                        </div>
                        <div className="social__media-container">
                        <a href="mailto:info@chawamisuppliesltd.com" target='_blank' rel="noreferrer"> <Email/> Email Us </a>
                        </div>
                    </div>
                      
                  </div>
                )
            }
            </div>
        </div>
    )
}

export default Navbar
