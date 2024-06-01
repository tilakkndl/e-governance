const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    crop: {
        type: String,
        required: [true, "Crop type is required"]
    },
    isSeeding: {
        type: Boolean,
        require: [true, "isSeeding is compulsory"]

    },
    requirement: {
type: [String]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    recipe: {
        seeding:{
            timePeriod: {
                type: [Number],
                required: [true, "required"]
            },
            weather: {
                // type: String,
                // avergeTemperature: Number,
                // humidity: Number,
                // precipitation: Number,
                weatherType: {
                    type: String,
                    required: [true, "required"]
                },
                averageTemperature: {
                    type: Number,
                    required: [true, "required"]

                },
                humidity: {
                    type: Number,
                    required: [true, "required"]
                },
                precipitation:{
                    type: String,
                    required: [true, "required"]
                }
            },
            wateringTimeInterval: {
                type: Number,
                required: [true, "required"]
            },
            healthyCropHeight: {
                type: Number,
                required: [true, "required"]
            },

        }, 
        plantation:{
            timePeriod: {
                type: [Number],
                required: [true, "required"]
            },
            averageTemperature: {
                type: Number,
                required: [true, "required"]
            },
            wateringTimeInterval: {
                type: Number,
                required: [true, "required"]
            },
            healthyCropHeight: {
                type: Number,
                required: [true, "required"]
            },
        },
        fertilization: {
            fertilizers: [String],
            diseases: [{
disease: String,
pesticide: String,
            }],
            timePeriod: {
                type: [Number],
                required: [true, "required"]
            },
        },

        harvesting: {
            timePeriod: {
                type: [Number],
                required: [true, "required"]
            },
            weather: {
                // type: String,
                // avergeTemperature: Number,
                // humidity: Number,
                // precipitation: Number,
                weatherType: {
                    type: String,
                    required: [true, "required"]
                },
                averageTemperature: {
                    type: Number,
                    required: [true, "required"]

                },
                humidity: {
                    type: Number,
                    required: [true, "required"]
                },
                precipitation:{
                    type: String,
                    required: [true, "required"]
                }
            }

        }
    
    }
})

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;