const express = require("express");
const { createUser, getUsers, getUserById, registerUser, loginUser } = require("../controllers/usercontroller");

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'User routes working!' });
});

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);

module.exports = router;