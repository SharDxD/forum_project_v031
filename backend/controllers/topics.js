const Topic = require('../models/topic');

exports.getTopics = async (req, res) => {
    try {
      const topics = await Topic.find().populate('author', 'username'); // Populate author username
      res.status(200).json(topics);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching topics' });
    }
  };

exports.getTopic = async (req, res) => {
    const { id } = req.params;
    try {
        const topic = await Topic.findById(id).populate('author', 'username');
        if (!topic) {
            return res.status(404).json({ error: 'Topic not found' });
        }
        res.status(200).json(topic);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching topic' });
    }
};

exports.createTopic = async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const topic = new Topic({ title, content, author });
        await topic.save();
        res.status(201).json(topic);
    } catch (error) {
        res.status(500).json({ error: 'Error creating topic' });
    }
};

exports.updateTopic = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const topic = await Topic.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!topic) {
            return res.status(404).json({ error: 'Topic not found' });
        }
        res.status(200).json(topic);
    } catch (error) {
        res.status(500).json({ error: 'Error updating topic' });
    }
};

exports.deleteTopic = async (req, res) => {
    try {
      const topic = await Topic.findByIdAndDelete(req.params.id);
      if (!topic) {
        return res.status(404).json({ error: 'Topic not found' });
      }
      res.status(200).json({ message: 'Topic deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting topic' });
    }
  };