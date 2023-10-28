import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

function Home() {
  return (
    <div className='home-container'>
      <div className='logo'>
        <img src={logo} alt=' Mimosa Mining Co.' className='logo-img' />
        <h1>GAZEBO</h1>
      </div>
      <div className='start-app'>
        <div className='log-admin'>
          <h2>Admin Account</h2>
          <Link to='/signin' className='btn-white'>
            Sing in
          </Link>
        </div>
        <div className='log-cust'>
          <h2>Customer Account</h2>
          <Link to='/signin' className='btn-yellow'>
            Sing in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
