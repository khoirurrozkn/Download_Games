import asyncHandler from 'express-async-handler'
import Category from './../model/category.js'
import Game from '../model/games.js'

const getAllCategory = asyncHandler( async( req, res ) => {
    const result = await Category.find().select('-games')

    res.status(200).json({ result })
})

const getCategory = asyncHandler( async( req, res ) => {
    const { name } = req.params

    const result = await Category.findOne({ category_name : name })
    .populate('games')

    res.status(200).json({ result })
})

// const isiCategory = asyncHandler(async (req, res) => {
//     const data = await Game.find({ category: "Social"});

//     await Category.create({ category_name: "Social" })
  
//     const result = await Category.updateOne(
//       { category_name: 'Social' },
//       { $addToSet: { games: { $each: data } } }
//     );
  
//     res.status(200).json({ data });
// });
  

export {
    getAllCategory,
    getCategory
    // isiCategory
}