import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    category_name: {
        type: String,
        required: true
    },
    games: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Game"
        }
    ]
},{
    timestamps: true
})

const Category = mongoose.model('Category', categorySchema)

export default Category