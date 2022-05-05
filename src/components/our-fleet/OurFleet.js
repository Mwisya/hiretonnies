import React, {useState} from 'react'
import './ourfleet.css'
import {fleet } from '../../ImagesData'
import {CallSharp, PeopleSharp } from '@material-ui/icons';

//  Payment, icons

const OurFleet = () => {
     const [modal, setModal] = useState(false);
    const [modalImage, setModalImage] = useState('');
    
        const getimage = (item)=>{
          setModalImage(item.img);
          setModal(true);
        }
    
        const closemodal = ()=>{
          setModal(false) 
        }



  return (
    <div className='fleet-container'>
        
      <div className='gallery_container'>
          {
            fleet.map(
              (item, index)=> (
                <div key={index} onClick={()=> getimage(item)} className='img-container'>
                  <img src={item.img} alt={item.img}/>
                </div>
              )
              )
          }
        </div>

        {
          fleet.map((item, index) => (

            <div className={modal? 'modal open' : 'modal'}>
                <i className="close" onClick={closemodal}>&times;</i>
                <img src={modalImage} alt={modalImage} />

                <div className='cta-btns'>
                  <p><PeopleSharp/>{item.seat} seater</p>
                  <p><PeopleSharp/>{item.design}</p>
                  <p><PeopleSharp/>{item.doors} doors</p>                      <button className='call_us-btn'><CallSharp/>
                    <a href="tel:+254719580450">Call Us </a>
                  </button>
              
                </div>
            </div>
          ))
        }


  
    </div>
  )
}

export default OurFleet