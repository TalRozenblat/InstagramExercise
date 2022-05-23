import express from "express";
import followController from '../controllers/followController.js';

const router = express.Router();

router.route('/').get();



export default router;