const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const authMiddleware = require('../middlewares/auth');
const moderatorMiddleware = require('../middlewares/moderator');

// Get all users
router.get('/', authMiddleware, userController.getUsers);
// Delete a user by ID
router.delete('/:id', authMiddleware, moderatorMiddleware, userController.deleteUser);


module.exports = router;
