import mongoose from 'mongoose'

const gameSchema = mongoose.Schema({
    crack: {
        type: Boolean,
        required: true
    },
    developer: {
        type: String
    },
    publisher: {
        type: String
    },
    release: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    game_url: {
        type: String,
        required: true
    },
    game_name: {
        type: String,
        required: true
    },
    platfrom: {
        type: String
    },
    thumbnail: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Game = mongoose.model('Game', gameSchema)

export default Game