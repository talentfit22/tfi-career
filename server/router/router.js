const express = require('express');
const route = express.Router();

// superadmin
const { getSuperadmin,
registerSuperAdmin,
loginSuperAdmin,
protectedSuperAdmin,
logoutSuperAdmin} = require('../controllers/superAdminController');
const { validationSuperAdmin } = require('../midlewares/superadmin/validationSuperAdmin');
const { authSuperAdmin } = require('../midlewares/superadmin/authSuperAdmin');
const {registerSuperAdminValidation, loginSuperAdminValidation} = require('../validators/auth-superAdmin');

// superadmin router
route.get('/get-superadmin', getSuperadmin);
route.get('/protected', authSuperAdmin, protectedSuperAdmin);
route.post('/register', registerSuperAdminValidation, validationSuperAdmin, registerSuperAdmin);
route.post('/login', loginSuperAdminValidation, validationSuperAdmin, loginSuperAdmin);
route.get('/logout', logoutSuperAdmin);

// participant
const { getAllParticipant, postParticipants, deleteParticipant} = require('../controllers/participantController')

//participant router
route.get('/get-participants', getAllParticipant);
route.post('/post-participant', postParticipants);
route.delete('/delete-participant/:id', deleteParticipant);

module.exports = route;
