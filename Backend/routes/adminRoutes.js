const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/Auth');
const adminController = require('../controllers/adminController');

// Public routes
router.post('/login', adminController.loginAdmin);
router.post('/create', adminController.createAdmin);

// Protected routes
router.get('/profile', authMiddleware, adminController.getAdminProfile);
router.put('/profile', authMiddleware, adminController.updateAdminProfile);
router.delete('/profile', authMiddleware, adminController.deleteAdmin);
router.get('/all', authMiddleware, adminController.getAllAdmins);

module.exports = router;