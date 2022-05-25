import db from '../config/config.js'
import Follow from '../data/Follows.js';



const addFollow = async (req, res) => {


    const newFollow = new Follow({
        Userid1: req.body.userId,
        Userid2: req.body.userToFollow
    });

    try {
        
        await newFollow.save();
        return res.send(newFollow);
    }

    catch (err) {
        res.send(err);
    }

}

const getFollowsByUserId = async (req, res) => {

    const Follows = await Follow.find({ Userid1: req.params.id});


    return res.send(Follows);
    
}

const getFollowersByUserId = async (req, res) => {

    const Follows = await Follow.find({ Userid2: req.params.id});

    return res.send(Follows);
    
}
const deleteFollow = async (req, res) => {

    try{
        await Follow.deleteOne({ _id: req.params.id });
        return res.status(200).send('Success.');
    }
    
    catch(err){
        return res.send(err);
    }
    
}

export default { addFollow, deleteFollow, getFollowsByUserId, getFollowersByUserId }
