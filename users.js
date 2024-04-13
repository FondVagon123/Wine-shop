const express = require('express');
const router = express.Router();
// Припускаємо, що bcrypt і db уже налаштовані

router.post('/register', (req, res) => {
    // Реєстрація користувача
    res.send('Register Endpoint');
});

router.get('/profile', (req, res) => {
    // Профіль користувача
    res.send('User Profile Endpoint');
});

module.exports = router;
