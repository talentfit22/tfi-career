import axios from 'axios'
axios.defaults.withCredentials = true

const baseUrl = process.env.NODE_ENV === 'production'? '/api' : 'http://localhost:8000';

//superadmin

export async function superAdminRegistration(registrationData) {
  return await axios.post(
    `${baseUrl}/register`,
    registrationData
  )
}

export async function adminLogin(loginData) {
  return await axios.post(`${baseUrl}/login`, loginData)
}

export async function superAdminLogout() {
  return await axios.get(`${baseUrl}/logout`)
}

export async function superAdminProtect() {
  return await axios.get(`${baseUrl}/protected`)
}