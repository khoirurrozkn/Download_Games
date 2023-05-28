import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorHandler.js'
import connection from './config/database.js'
import categoryRoute from './routes/category.js'
import gameCategory from './routes/games.js'

dotenv.config()
const app = express()
connection()
app.use(cors({origin: 'https://kukigames.vercel.app/'}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/category', categoryRoute)
app.use('/api/game', gameCategory)
app.use('/*', (req, res) => {
    res.status(404).send("hayoo mau ngapain")
})
app.use('/', (req, res) => {
    res.status(200).send("api-berjalan")
})

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT ,() => console.log(`Server running on PORT ${process.env.PORT}`))