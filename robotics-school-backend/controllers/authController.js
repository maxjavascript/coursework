const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authController = {
    register: async (req, res) => {
        const { username, email, password } = req.body
        try {
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await User.create(username, email, hashedPassword)
            res.status(201).json({ id: newUser.id, username: newUser.username })
        } catch (error) {
            res.status(500).json({ message: 'Error creating user.' })
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body
        try {
            const user = await User.findByEmail(email)
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials.' })
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials.' })
            }
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            })
            res.json({ token })
        } catch (error) {
            res.status(500).json({ message: 'Error logging in.' })
        }
    },
}

module.exports = authController
