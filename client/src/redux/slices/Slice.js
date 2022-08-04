import { createSlice } from '@reduxjs/toolkit';

const superAdminFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth && JSON.parse(isAuth) === true) {
    return true
  }

  return false
}

const initialState = {
  isAuth: superAdminFromLocalStorage(),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateSuperAdmin: (state) => {
      state.isAuth = true
    },
    unauthenticateSuperAdmin: (state) => {
      state.isAuth = false
    },
  },
})

export const { authenticateSuperAdmin, unauthenticateSuperAdmin } = authSlice.actions

export default authSlice.reducer