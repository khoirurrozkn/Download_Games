import express from 'express'
import { getGame, getAllGame, isiGame} from './../controller/games.js'

const routes = express.Router()

routes.get('/', getAllGame)
routes.get('/:name', getGame)
routes.post('/', isiGame)


export default routes