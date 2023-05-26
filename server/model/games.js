import mongoose from 'mongoose'

const gameSchema = mongoose.Schema({
    crack: {
        type: Boolean,
        required: true
    },
    gameName: {
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