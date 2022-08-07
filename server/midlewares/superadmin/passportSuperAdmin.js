const { config } = require('dotenv');
config()

const passport = require('passport');
const { Strategy } = require('passport-jwt');
const { SECRET } = require('../../constants');
const pool = require('../../db');

const cookieExtractor = (req) => {
  let token = null;

  if (req && req.cookies) token = req.cookies['token']
  return token
}

const option = {
  secretOrKey: process.env.SECRET,
  jwtFromRequest: cookieExtractor
}

passport.use(
  new Strategy (option, async ({id}, done) => {
    try {
      const { rows } = await pool.query('SELECT sa_id, email FROM superadmin WHERE sa_id = $1', [id]);

      if (!rows.length){
        throw new Error ('404 not authorized')
      }

      let user = { id: rows[0].sa_id, email: rows[0].email }

      return await done (null, user)

    } catch (error) {
      console.log(error.message)
      done (null, false)
    }
  })
);