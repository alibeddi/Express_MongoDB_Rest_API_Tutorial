const mongoose = require("mongoose")

const contactShcema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'please add the name ']
        }, phone: {
            type: String,
            required: [true, 'please add the phone number ']
        }, email: {
            type: String,
            required: [true, 'please add the email ']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Contact", contactShcema)