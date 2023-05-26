import asyncHandler from 'express-async-handler'
import Category from './../model/category.js'

const getAllCategory = asyncHandler( async( req, res ) => {
    const result = await Category.find()

    res.status(200).json({ result })
})

const getCategory = asyncHandler( async( req, res ) => {
    const { name } = req.params

    const result = await Category.findOne({ category_name : name })
    .select('games')
    .populate('crack developer publisher release description game_url game_name platfrom tumbnail category')

    res.status(200).json({ result })
})

export {
    getAllCategory,
    getCategory
}