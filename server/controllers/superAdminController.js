const { hash } = require('bcryptjs');
const pool = require('../db');
const { sign } = require('jsonwebtoken');
const { SECRET } = require('../constants');

module.exports = {
  getSuperadmin: async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT sa_id, email FROM superadmin')

      return res.status(200).json({
        success: true,
        assessor: rows
      })
    } catch (error) {
      console.log(error.message)
    }
  },

  registerSuperAdmin: async (req, res) => {
    const {email, password} = req.body;

    try {
      const hashedPassword = await hash(password, 10);

      await pool.query('INSERT INTO superadmin (email, password) VALUES ($1, $2)', [email, hashedPassword]);

      return res.status(201).json({
        success: true,
        message: 'successfully registered'
      })
    } catch (error) {
      console.log(error.messgae)
    }
  },

  loginSuperAdmin: async (req, res) => {
    let user = req.user;

    let payload = {
      id: user.sa_id,
      email: user.email
    }

    try {
      const token = await sign(payload, SECRET);

      return res.status(200).cookie('token', token).json({
        success: true,
        message: 'logged in'
      })
    } catch (error) {
      console.log(error.message)
    }
  },

  protectedSuperAdmin: async (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected info',
    })
  } catch (error) {
    console.log(error.message)
    }
  },

  logoutSuperAdmin: async (req, res) => {
   try {
    return res.status(200).clearCookie('token').json({
      success: true,
      message: 'Logged out',
    })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        error: error.message,
      })
    }
  }
}