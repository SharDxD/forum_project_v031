const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topics');
const authMiddleware = require('../middlewares/auth');

// Get all topics
router.get('/', topicController.getTopics);

// Create a new topic
router.post('/', authMiddleware, topicController.createTopic);

// Get a specific topic by ID
router.get('/:id', topicController.getTopic);

// Update a topic
router.put('/:id', authMiddleware, topicController.updateTopic);

// Delete a topic
router.delete('/:id', authMiddleware, topicController.deleteTopic)

module.exports = router;
