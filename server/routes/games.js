import express from 'express'
import { getGame, getAllGame } from './../controller/games.js'

const route = express.Router()

route.get('/', getAllGame)
route.get('/game/:name', getGame)


export default route