import express from "express";
import followController from '../controllers/followController.js';

const router = express.Router();

router.route('/').post(followController.addFollow);
router.route('/:id').delete(followController.deleteFollow);
router.route('/followers/:id').get(followController.getFollowersByUserId);
router.route('/following/:id').get(followController.getFollowsByUserId)



export default router;