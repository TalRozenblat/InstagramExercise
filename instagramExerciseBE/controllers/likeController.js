import db from '../config/config.js'
import Like from '../data/Likes.js';



const addLike = async (req, res) => {


    const newLike = new Like({
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

const getLikeByPostId = async (req, res) => {

    const posts = await Like.find({ Postid: req.body.postId});

    return res.send(posts);
    
}
const getPostsByUserId = async (req, res) => {

    const posts = await Post.find({ userId: req.params.id});

    return res.send(posts);
    
}

const deleteLike = async (req, res) => {

    try{
        await Like.deleteOne({ _id: req.params.id });
        return res.status(200).send('Success.');
    }
    
    catch(err){
        return res.send(err);
    }
    
}

export default { addLike, deleteLike, getLikeByPostId,  }
