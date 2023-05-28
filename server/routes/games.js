import express from 'express'
import { getGame, getAllGame } from './../controller/games.js'

const routes = express.Router()

routes.get('/', getAllGame)
routes.get('/:name', getGame)


export default routes