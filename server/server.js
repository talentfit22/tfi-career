const express = require('express');
const app = express();
const { PORT, CLIENT_URL } = require('./constants');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');


//passport midleware superadmin
require('./midlewares/superadmin/passportSuperAdmin');

//initialize midleware admin
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: CLIENT_URL, credentials: true}));
app.use(passport.initialize());

//router
const router = require('./router/router');
app.use(router)


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})