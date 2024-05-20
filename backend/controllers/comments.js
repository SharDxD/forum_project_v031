const Comment = require('../models/comment');

exports.getComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById(id).populate('author', 'username');
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comment' });
  }
};
exports.getComments = async (req, res) => {
  const { topicId } = req.params;
  try {
    const comments = await Comment.find({ topic: topicId }).populate('author', 'username');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
};

exports.createComment = async (req, res) => {
  const { topicId } = req.params;
  const { content, author } = req.body;

  console.log('Topic:', { topicId });
  // Log the incoming request data for debugging
  console.log('Request data:', { topicId, content, author });

  if (!topicId || !content) {
    return res.status(400).json({ error: 'Topic ID and content are required.' });
  }

  try {
    const commentData = { content, topic: topicId, author: author || 'user***' };
    const comment = new Comment(commentData);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Error creating comment' });
  }
};

exports.updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const comment = await Comment.findByIdAndUpdate(id, { content }, { new: true });
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error updating comment' });
  }
};

exports.deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting comment' });
  }
};
