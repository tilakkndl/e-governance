const mongoose = require("mongoose")

const schedularModel = new mongoose.Schema({
    title: {
        "type": String,
        required: [true, "required"]
    },
    startingDate: {
        type: Date,
        required: [true, "required"]
    },
    endingDate: {
        type: Date,
        required: [true, "required"]
    }
})

const Schedular = mongoose.model("Schedular", schedularModel )


module.exports = Schedular