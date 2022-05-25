import db from '../config/config.js'
import Post from '../data/Posts.js';
import Like from '../data/Likes.js';
import { v2 as cloudinary } from 'cloudinary';


const addPost = async (req, res) => {

    const uploadResult = req.file && await cloudinary.uploader.upload(req.file.path);

    const newPost = new Post({
        Img: uploadResult ? uploadResult.secure_url : null,
        userId: req.body.userId
    });

    try {
        
        await newPost.save();
        return res.send(newPost);
    }

    catch (err) {
        res.send(err);
    }

}

const getAllPosts = async (req, res) => {

    const posts = await Post.find();

    return res.send(posts);
    
}
const getPostsByUserId = async (req, res) => {

    const posts = await Post.find({ userId: req.params.id});

    return res.send(posts);
    
}

const deletePost = async (req, res) => {

    try{
        await Post.deleteOne({ _id: req.params.id });
        return res.status(200).send('Success.');
    }
    
    catch(err){
        return res.send(err);
    }
    
}

const getAllMyFollowPosts = async (req, res) => {
    const likes = await Like.find({ Userid: req.params.id});
    const posts = [];

    for(let i = 0; i < likes.length; i++){
        const postToAdd = await Post.find({ _id: likes[i].Postid })
        posts.push(postToAdd[0]);
    }


    return res.send(posts);
}
export default { addPost, getAllPosts, getPostsByUserId, deletePost, getAllMyFollowPosts }
