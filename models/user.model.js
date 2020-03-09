const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

module.exports = mongoose.model("User", userSchema);