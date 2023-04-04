const mongoose = require("mongoose");

const songSchema =mongoose.Schema(
    {
        name : {
            type: String,
            required : true,
        },
        imageURL: {
            type: String,
            required : false,
        },
        songUrl: {
            type: String,
            required : false,
        },
        album: {
            type: String,
        },
        artist: {
            type: String,
            required : true,
        },
       language: {
            type: String,
            required : true,
        },
        category: {
            type: String,
            required : true,
        },
        favorite: {
            type: Boolean,
            default: false,
        },

    },
    {timestamps: true}
);
module.exports = mongoose.model("song", songSchema)