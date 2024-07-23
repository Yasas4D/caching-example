import { Router } from "express";
import { getPosts, updatePost } from "../controllers/postController.js";

const router = Router();

// Get all posts
router.route("/").get(getPosts);

// Update post by id
router.route("/:id").put(updatePost);

export default router;
