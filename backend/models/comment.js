const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true },
  author: { type: String, default: 'user***' }, // Default value for author
  topic: { type: Schema.Types.ObjectId, ref: 'Topic', required: true }, // Ensure topicId is required and correctly referenced
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);