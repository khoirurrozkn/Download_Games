import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorHandler.js'
import connection from './config/database.js'
import categoryRoute from './routes/category.js'
import gameCategory from './routes/games.js'
import path from 'path'


dotenv.config()
const app = express()
connection()
// {origin: 'https://zigames.vercel.app/'}
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/category', categoryRoute)
app.use('/api/game', gameCategory)

////////////////////////////////// DEPLOY

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.resolve(__dirname, '../client/build')));

    // Route all requests to the client-side index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
}

////////////////////////////////// DEPLOY

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT ,() => console.log(`Server running on PORT ${process.env.PORT}`))
