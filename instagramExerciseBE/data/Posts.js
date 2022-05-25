import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema({
  Img: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Post = mongoose.model("Posts", PostsSchema);

export default Post;
