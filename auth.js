const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    // Логіка входу
    res.send('Login Endpoint');
});

module.exports = router;

