import db from '../config/config.js'
import Like from '../data/Likes.js';



const addLike = async (req, res) => {


    const newLike = new Like({
        Userid: req.body.userId,
        Postid: req.body.postId
    });

    try {
        
        await newLike.save();
        return res.send(newLike);
    }

    catch (err) {
        res.send(err);
    }

}

const getLikeByPostId = async (req, res) => {

    const likes = await Like.find({ Postid: req.params.id});

    return res.send(likes);
    
}
const getLikesByUserId = async (req, res) => {

    const likes = await Like.find({ Userid: req.params.id});


    return res.send(likes);
    
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

export default { addLike, deleteLike, getLikeByPostId, getLikesByUserId }
