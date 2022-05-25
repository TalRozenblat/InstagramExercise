import express from "express";
import likeController from '../controllers/likeController.js';

const router = express.Router();

router.route('/').get().post(likeController.addLike).delete(likeController.deleteLike);

router.route('/:id').delete(likeController.deleteLike);
router.route('/user/:id').get(likeController.getLikesByUserId);
router.route('/post/:id').get(likeController.getLikeByPostId);




export default router;