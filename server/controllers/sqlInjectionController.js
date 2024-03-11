const User = require('../models/userModel');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Vulnerable code for SQL Injection
    const user = await User.findOne({ username, password });

    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};