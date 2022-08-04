import React, { useState } from 'react';
import './SuperAdminLogin.css'
import { useDispatch } from 'react-redux';
import { adminLogin } from '../api/Api';
import { authenticateSuperAdmin } from '../redux/slices/Slice';

import logo from '../resources/Logo-TFI-1.png'

const SuperAdminLogin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await adminLogin(values)
      dispatch(authenticateSuperAdmin())

      localStorage.setItem('isAuth', 'true')
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
    }
  }
  return (
    <div className='login'>
      <div className='picture-side'>
        <img src={logo} alt="tfi" />
      </div>
      <div className='login-right'>
        <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
          <h1>Login</h1>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              onChange={(e) => onChange(e)}
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={values.email}
              placeholder='test@gmail.com'
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              onChange={(e) => onChange(e)}
              type='password'
              value={values.password}
              className='form-control'
              id='password'
              name='password'
              placeholder='password'
              required
            />
          </div>

          <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
      
    </div>
  )
}

export default SuperAdminLogin;