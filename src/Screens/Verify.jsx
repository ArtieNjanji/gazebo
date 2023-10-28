import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//componets
import Header from '../components/Header'
import Input from '../components/Input'

function Verify() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState({})

  const navigate = useNavigate()

  const onfocus = () => {}

  const getCode = (e) => {
    e.preventDefault()
    if (phone === '') {
      setError({ phone: 'Please Enter Mine No.' })
    } else {
      setShow(true)
    }
  }
  const verify = async (e) => {
    e.preventDefault()
    if (code === '') {
      setError({ code: 'Please Enter Code.' })
    } else {
      setError({})
      navigate('/forgot-password')
    }
  }

  return (
    <section>
      <Header name='Authenticate ' />
      <div className='signin-container'>
        <div className='form-control'>
          <Input
            name='Mine No.'
            placeholder='Enter Mine No.'
            type='text'
            value={phone}
            error={error.phone}
            onFocus={onfocus}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Link className='btn-yellow' onClick={getCode}>
            Get Code
          </Link>
          {show && (
            <div className='form-control'>
              <Input
                name='Password'
                placeholder='Enter Code'
                type='text'
                value={code}
                error={error.code}
                onFocus={onfocus}
                onChange={(e) => setCode(e.target.value)}
              />
              <Link className='btn-yellow' onClick={verify}>
                Verify
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Verify
