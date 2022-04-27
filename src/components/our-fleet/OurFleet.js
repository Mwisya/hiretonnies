import React, {useState} from 'react'
import './ourfleet.css'
import {fleet } from '../../ImagesData'
import {CallSharp, Payment, PeopleSharp } from '@material-ui/icons';

const OurFleet = () => {
     const [modal, setModal] = useState(false);
    const [modalImage, setModalImage] = useState('');
    
        const getimage = (img)=>{
          setModalImage(img);
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
                <div key={index} onClick={()=> getimage(item.img)} className='img-container'>
                  <img src={item.img} alt={item.img}/>
                </div>
              )
              )
          }
        </div>


        <div className={modal? 'modal open' : 'modal'}>
            <i className="close" onClick={closemodal}>&times;</i>
            <img src={modalImage} alt={modalImage} />
            <div className='cta-btns'>
              <p><PeopleSharp/> 6 seater</p>
              <p> <CallSharp/>Call Us </p>
              <p> <Payment/> Book now </p>
            </div>
        </div>
  
    </div>
  )
}

export default OurFleet