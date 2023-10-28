import { Link } from 'react-router-dom'
import { TiArrowBackOutline } from 'react-icons/ti'

import logo from '../assets/logo.jpeg'
function Header({ name }) {
  return (
    <div className='header-container'>
      <Link to='/' className='btn'>
        <TiArrowBackOutline size={30} color='#0d5128' />
      </Link>
      <h2>{name}</h2>
      <img src={logo} alt='Mimosa Mining Co' className='logo' />
    </div>
  )
}

export default Header
