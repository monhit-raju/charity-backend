const express = require("express");

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'User routes working!' });
});

router.get('/', (req, res) => {
    res.json({ message: 'Users endpoint working' });
});

module.exports = router;