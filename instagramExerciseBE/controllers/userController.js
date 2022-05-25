import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../data/Users.js';
import db from '../config/config.js'
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';




const login = async (req, res) => {
    const user = await User.find({ email: req.body.email});

    if(user == false){
        return res.send('Email or password is incorrect.');

    }

    //check password
    if(await bcrypt.compare(req.body.password, user[0].password)){
        const userToReturn = {
            email: user[0].email,
            firstName: user[0].firstName,
            lastName: user[0].lastName,
            id: user[0]._id

            
        }
        return res.send(userToReturn);
    }
    else{
        return res.send('Email or password is incorrect.');

    }

}

const signup = async (req, res) => {

    //check if email is in use
    const user = await User.find({ email: req.body.email});

    if(user[0]){
        return res.send('This email address is already being used.')
    }

    //check password
    if(req.body.password !== req.body.checkPassword){
        res.status(400).send("Passwords don't match.");
        return;
    }

    const uploadResult = req.file && await cloudinary.uploader.upload(req.file.path);
    const hashedPassword = await bcrypt.hash(req.body.password , 10);

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        email: req.body.email,
        profilePicture: uploadResult ? uploadResult.secure_url : null,
    });


    try {
        
        //insert user into db and log them in

        await newUser.save();
        return res.send(newUser);
    }

    catch (err) {
        res.send(err);
    }
}

const updateUser = async (req, res) => {

    const uploadResult = req.file && await cloudinary.uploader.upload(req.file.path);
    const user = await User.find({ _id: req.params.id});

    if(user == false){
        return res.status(404).send('User not found.');

    }
    const update = {}
    const filter = { _id: req.params.id }

    uploadResult ? (update.profilePicture = (uploadResult ? uploadResult.secure_url : null)) : null;
    
    req.body.firstName ? update.firstName = req.body.firstName : null;
    req.body.lastName ? update.lastName = req.body.lastName : null;
    req.body.email ? update.email = req.body.email : null;

    const updatedUser = await User.findOneAndUpdate(filter, update, {
        new: true
    });

    return res.send(updatedUser);

}

const getUserById = async (req, res) => {

    const user = await User.find({ _id: req.params.id});

    const userToReturn = {
        email: user[0].email,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        id: user[0]._id

        
    }
    return res.send(userToReturn);
}
export default { login, signup, updateUser, getUserById }