const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
  
    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = new User({
      username,
      password: hashedPassword,
      role: role || 'user' // Set default role as 'user' if not provided
    });
  
    try {
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user' });
    }
  };

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, config.jwtSecret, { expiresIn: '1h' });
        res.status(200).json({ username: user.username, role: user.role, token });
        const rolee = user.role;
        console.log('Role: ', { rolee });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
    
};

exports.logout = (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
};
