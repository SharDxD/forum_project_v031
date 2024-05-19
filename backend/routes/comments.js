const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');
const authMiddleware = require('../middlewares/auth');

router.get('/:topicId/comments', commentController.getComments);
router.post('/:topicId/comments', authMiddleware, commentController.createComment);
router.put('/:id', authMiddleware, commentController.updateComment);
router.delete('/:id', authMiddleware, commentController.deleteComment);

module.exports = router;
