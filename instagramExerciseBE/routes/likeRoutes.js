import express from "express";
import likeController from '../controllers/likeController.js';

const router = express.Router();

router.route('/').get();



export default router;