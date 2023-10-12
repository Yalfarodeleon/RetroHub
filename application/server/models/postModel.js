const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post_id: {
        type: Number,
    },
    post_title: {
        type: String
    },
    post_content: {
        type: String
    },
    post_author: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model("posts",postSchema);