const mongoose = require("mongoose")

const startingDateSchema = new mongoose.Schema({
    startingDate: {
        type: String,
        required: [true, "required"]
    },
    user: {
        type: String,
        required: true,
      },
})

const StartingDate = mongoose.model("StartingDate", startingDateSchema)

module.exports = StartingDate;