const db = require('../config/db')

const User = {
    create: async (username, email, password) => {
        const query =
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *'
        const values = [username, email, password]
        const res = await db.query(query, values)
        return res.rows[0]
    },

    findByEmail: async email => {
        const query = 'SELECT * FROM users WHERE email = $1'
        const values = [email]
        const res = await db.query(query, values)
        return res.rows[0]
    },
}

module.exports = User
