const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Exemplo de rota para criar um usuário
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
