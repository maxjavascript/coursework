const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
