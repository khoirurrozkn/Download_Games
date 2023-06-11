import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorHandler.js'
import connection from './config/database.js'
import categoryRoute from './routes/category.js'
import gameCategory from './routes/games.js'
// import path from 'path'


dotenv.config()
const app = express()
connection()
app.use(cors({origin: 'https://zigames.vercel.app/'}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/category', categoryRoute)
app.use('/api/game', gameCategory)

////////////////////////////////// DEPLOY

// const __dirname1 = path.resolve()
// if(process.env.NODE_ENV==='production'){
//     app.use(express.static(path.join(__dirname1, '/client/build')))

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname1, 'client', 'build', 'index.html'))
//     })
// }else{
//     app.get('/', (req, res) => {
//         res.status(200).send('api berjalan')
//     })
// }

app.get('/', (req, res) => {
    res.status(200).send('api berjalan')
}

////////////////////////////////// DEPLOY

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT ,() => console.log(`Server running on PORT ${process.env.PORT}`))
