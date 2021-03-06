import express from "express";
import multer from "multer";
import postController from "../controllers/postController.js";

const upload = multer({ dest: process.env.UPLOAD_FOLDER + "/" });
const router = express.Router();

router
  .route("/")
  .get(postController.getAllPosts)
  .post(upload.single("img"), postController.addPost);
router.route("/user/:id").get(postController.getPostsByUserId);
router.route("/:id").delete(postController.deletePost);
router.route("/user/all/:id").get(postController.getAllMyFollowPosts);

export default router;
