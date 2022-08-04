const { check } = require('express-validator');
const pool = require('../db');
const { compare } = require('bcryptjs');

//password
const passwordSuperAdmin = check('password')
  .isLength({ min: 6, max: 15 })
  .withMessage('Password has to be between 6 and 15 characters.')

//email
const emailSuperAdmin = check('email')
  .isEmail()
  .withMessage('Please provide a valid email.')

//check if email exists
const emailExists = check('email').custom(async (value) => {
  const { rows } = await pool.query('SELECT * from superadmin WHERE email = $1', [
    value,
  ])

  if (rows.length) {
    throw new Error('Email already exists.')
  }
})

//login validation
const loginCheck = check('email').custom(async (value, { req }) => {
  const user = await pool.query('SELECT * from superadmin WHERE email = $1', [value])

  if (!user.rows.length) {
    throw new Error('Email does not exists.')
  }

  const validPassword = await compare(req.body.password, user.rows[0].password)

  if (!validPassword) {
    throw new Error('Wrong password')
  }

  req.user = user.rows[0]
})

module.exports = {
  registerSuperAdminValidation: [emailSuperAdmin, passwordSuperAdmin, emailExists],
  loginSuperAdminValidation: [loginCheck]
}