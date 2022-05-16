require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DataBase'))

app.use(express.json())

const albumsRouter = require('./routes/albums')
app.use('/albums', albumsRouter)


app.listen(4000, () => console.log('Server Started'))
