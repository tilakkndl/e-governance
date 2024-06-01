const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const crypto = require("crypto")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"]
    },
        email: {
            type: String,
            require: [true, "There should be email"],
            unique: true,
            lowerCase: true,
            validate: [validator.isEmail, "There should be valid email"]
        },
    
        password: {
            type: String,
            required: [true, "There should be password"],
            minlength: 8,
            select: true
        },
        passwordConfirm:{
            type: String,
            required: [true, "Please confirm your password"],
            validate: {
                validator: function(el){
                    return el === this.password;
                },
                message: "Password doesn't match"
            }, 
            
        },
})

userSchema.pre("save", async function(next){
if(!this.isModified('password')) return
this.password = await bcrypt.hash(this.password, 12);

this.passwordConfirm = undefined;
})

userSchema.methods.correctPassword = async function(nonEncPassword, encPassword){
    return await bcrypt.compare(nonEncPassword, encPassword)
}

const User = mongoose.model("User", userSchema)

module.exports = User;