import './menu.css'
import { Link} from 'react-router-dom'



const Menu = ({close}) => {


  return (
      <div className='menu'>
        <ul onClick={close}>
           <li><Link to='/' className='menu__links' >Home</Link></li>
            <li><a href='#services' className='menu__links'>Services</a></li>
            <li><a href='#location' className='menu__links' >Location</a></li>
            <li><Link to='/book' className='menu__links' >Book</Link></li>
        </ul>
      </div>
  )
}

export default Menu