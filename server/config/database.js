import mongoose from "mongoose"

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Databases connected')
    } catch (error) {
        console.log(error.message)
    }
}

export default connection