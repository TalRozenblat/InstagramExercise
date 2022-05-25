import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../data/Users.js";
import db from "../config/config.js";
import mongoose from "mongoose";

const login = async (req, res) => {
  const user = await User.find({ email: req.body.email });

  if (user == false) {
    return res.send("Email or password is incorrect.");
  }

  //check password
  if (await bcrypt.compare(req.body.password, user[0].password)) {
    const userToReturn = {
      email: user[0].email,
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      id: user[0]._id,
    };
    return res.send(userToReturn);
  } else {
    return res.send("Email or password is incorrect.");
  }
};

const signup = async (req, res) => {
  //check if email is in use
  const user = await User.find({ email: req.body.email });

  if (user[0]) {
    return res.send("This email address is already being used.");
  }

  //check password
  if (req.body.password !== req.body.checkPassword) {
    res.status(400).send("Passwords don't match.");
    return;
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hashedPassword,
    email: req.body.email,
  });

  try {
    //insert user into db and log them in

    await newUser.save();
    return res.send(
      "Signup successful! Go to the Login page to access your account :)"
    );
  } catch (err) {
    res.send(err);
  }
};

export default { login, signup };
