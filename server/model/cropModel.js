const mongoose = require("mongoose")

const cropSchema = new mongoose.Schema({
    crop: {
        type: String,
        required: [true, "Crop name is  required"]
    },
    image: {
        type: String,
        required: [true, "Crop image is required"]
    },
    description: {
        type: String,
        required: [true, "Description about the crop is required"]
    }
})


const Crop = mongoose.model("Crop", cropSchema)

module.exports = Crop;