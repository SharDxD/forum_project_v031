const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');
const authMiddleware = require('../middlewares/auth');

// Get comments for a topic
router.get('/:topicId', commentController.getComments);

// Get a specific comment by ID
router.get('/comment/:id', commentController.getComment); // Add this route

// Create a new comment
router.post('/:topicId', authMiddleware, commentController.createComment);

// Update a comment
router.put('/:id', authMiddleware, commentController.updateComment);

// Delete a comment
router.delete('/:id', authMiddleware, commentController.deleteComment);

module.exports = router;
