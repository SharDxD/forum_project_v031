const Topic = require('../models/topic');

exports.getTopics = async (req, res) => {
    try {
        const topics = await Topic.find().populate('author', 'username');
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching topics' });
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
        res.status(200).json(topic);
    } catch (error) {
        res.status(500).json({ error: 'Error updating topic' });
    }
};

exports.deleteTopic = async (req, res) => {
    const { id } = req.params;
    try {
        await Topic.findByIdAndDelete(id);
        res.status(200).json({ message: 'Topic deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting topic' });
    }
};
