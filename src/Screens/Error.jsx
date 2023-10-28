import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error-page'>
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link to='/' className='btn'>
        back home
      </Link>
    </div>
  )
}

export default Error
