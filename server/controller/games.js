import asyncHandler from 'express-async-handler'
import Game from './../model/games.js'
import validator from 'validator'

const getAllGame = asyncHandler( async( req, res ) => {
    const games = await Game.find()
    res.status(200).json(games)
})

const getGame = asyncHandler( async( req, res ) => {
    const { name } = req.params

    if( !validator.isWhitelisted(name, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')){
        res.status(400)
        throw new Error("Tidak boleh mengandung karakter spesial")
    }

    const trimReq = validator.trim(name)

    const result = Game.findOne({ game_name : trimReq })

    res.status(200).json(result)
})

const isiGame = asyncHandler( async( req, res ) => {
    const { crack, description, game_url, game_name, thumbnail, category } = req.body

    const result = await Game.create({
        crack,
        description,
        game_url,
        game_name,
        thumbnail,
        category
    })

    res.status(200).json(result)
})

export {
    getAllGame,
    getGame,
    isiGame
}