import { useState } from 'react'
import { Link } from 'react-router-dom'

//componets
import Header from '../components/Header'
import Input from '../components/Input'

function ForgotPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({})

  const onfocus = () => {}

  return (
    <section>
      <Header name='Set New password ' />
      <div className='signin-container'>
        <div className='form-control'>
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
          <Input
            name='Password'
            placeholder='Confirm Password'
            type='password'
            value={confirmPassword}
            error={error.confirmPassword}
            onFocus={onfocus}
            onChange={(e) => setConfirmPassword(e.target.value)}
            password={true}
          />

          <Link to='/signin' className='btn-yellow'>
            Update Password
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
