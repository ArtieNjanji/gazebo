import { useState } from 'react'
import { Link } from 'react-router-dom'

//componets
import Header from '../components/Header'
import Input from '../components/Input'

function Login() {
  const [mineNo, setMineNo] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})

  const onfocus = () => {}

  return (
    <section>
      <Header name='Sing In ' />
      <div className='signin-container'>
        <div className='form-control'>
          <Input
            name='Mine No.'
            placeholder='Enter Mine No.'
            type='text'
            value={mineNo}
            error={error.mineNo}
            onFocus={onfocus}
            onChange={(e) => setMineNo(e.target.value)}
          />
          <Input
            name='Password'
            placeholder='Enter Password'
            type='password'
            value={password}
            error={error.password}
            onFocus={onfocus}
            onChange={(e) => setPassword(e.target.value)}
            password={true}
          />

          <Link to='/verify' className='forgot-password'>
            Forgot Password?
          </Link>

          <Link to='/cart' className='btn-yellow'>
            Sing in
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login
