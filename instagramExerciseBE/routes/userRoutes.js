import express from "express";
import multer from "multer";

import userController from '../controllers/userController.js';

const upload = multer({ dest: process.env.UPLOAD_FOLDER + '/'});
const router = express.Router();

router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);

router.route('/signup').post(upload.single('Img'), userController.signup);
router.route('/login').post(userController.login);
router.route('/:id').get(userController.getUserById).put(upload.single('Img'), userController.updateUser);


export default router;
