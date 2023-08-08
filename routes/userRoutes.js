const express = require('express');

const router = express.Router();

const { registerUser } = require('../controllers/UserControllers')


router.post('/register',)


router.post('/login', (req, res) => {
    res.json({ message: 'user login' })
})


router.get('/current', (req, res) => {
    res.json({ message: 'user information' })
})

module.exports = router