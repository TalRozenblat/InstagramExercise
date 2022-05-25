import mongoose from 'mongoose';

const LikesSchema = new mongoose.Schema({
    Userid: {
        type: String,
        required: true,
    },
    Postid: {
        type: String,
        required: true,
    },

});

const Like = mongoose.model("Likes", LikesSchema);

export default Like;