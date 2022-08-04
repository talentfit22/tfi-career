const passport = require('passport')

exports.authSuperAdmin = passport.authenticate('jwt', { session: false })