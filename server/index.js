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
app.use(cors({ origin: 'https://zigames.vercel.app/' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/category', categoryRoute)
app.use('/api/game', gameCategory)

////////////////////////////////// DEPLOY

if (process.env.NODE_ENV === 'production') {
    // Serve static files from the 'client' folder
    app.use(express.static('client'))

    // Catch-all route for client-side routing
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.status(200).send('API berjalan')
    })
}

////////////////////////////////// DEPLOY

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Server running on PORT ${process.env.PORT}`))
