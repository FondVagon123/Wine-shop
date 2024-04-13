const express = require('express');
const router = express.Router();

router.post('/subscribe', (req, res) => {
    // Додавання підписки
    res.send('Subscribe Endpoint');
});

module.exports = router;
