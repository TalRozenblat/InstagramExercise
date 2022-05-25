import mongoose from 'mongoose';

const FollowsSchema = new mongoose.Schema({
    Userid1: {
        type: String,
        required: true,
    },
    Userid2: {
        type: String,
        required: true,
    },

});

const Follow = mongoose.model("Follows", FollowsSchema);

export default Follow;