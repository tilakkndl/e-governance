const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema([{
   
    notifications: [
        {
          day: {
            type: Number,
            required: [true, "Day is required"],
          },
          message: {
            type: String,
            required: [true, "Message is required"],
          },
        },
      ],
}])

const Notify = mongoose.model("Notify", notificationSchema);

module.exports = Notify


