import express from 'express'
import { getAllCategory, getCategory } from './../controller/category.js'

const route = express.Router()

route.get('/', getAllCategory)
route.get('/genre/:name', getCategory)

export default route