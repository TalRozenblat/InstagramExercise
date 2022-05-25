import express from "express";
import likeController from '../controllers/likeController.js';

const router = express.Router();

router.route('/').get().post(likeController.addLike).delete(likeController.deleteLike);



export default router;