import React, { useState } from 'react';
import { superAdminRegistration } from '../api/Api';
import { useNavigate } from 'react-router-dom';
import './SuperAdminRegister.css';

import logo from '../resources/Logo-TFI-1.png'


const SuperAdminRegister = () => {
   const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await superAdminRegistration(values)

      setError('')
      setSuccess(data.message)
      setValues({ email: '', password: '' })
      navigate('/login')
    } catch (error) {
      setError(error.response.data.errors[0].msg)
      setSuccess('')
    }
  }
  return (
    <div className='register'>
      <div className='picture-side'>
          <img src={logo} alt="tfi" />
      </div>

      <div className='login-right'>
        <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
          <h1>Register</h1>

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
          <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>

          <button className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default SuperAdminRegister