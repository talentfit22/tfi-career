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
route.get('/api/get-superadmin', getSuperadmin);
route.get('/api/protected', authSuperAdmin, protectedSuperAdmin);
route.post('/api/register', registerSuperAdminValidation, validationSuperAdmin, registerSuperAdmin);
route.post('/api/login', loginSuperAdminValidation, validationSuperAdmin, loginSuperAdmin);
route.get('/api/logout', logoutSuperAdmin);

// participant
const { getAllParticipant, postParticipants, deleteParticipant} = require('../controllers/participantController')

//participant router
route.get('/api/get-participants', getAllParticipant);
route.post('/api/post-participant', postParticipants);
route.delete('/api/delete-participant/:id', deleteParticipant);

module.exports = route;
