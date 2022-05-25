import mongoose from 'mongoose';

const PostsSchema = new mongoose.Schema({
    Img: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },

});

const Post = mongoose.model("Posts", PostsSchema);

export default Post;