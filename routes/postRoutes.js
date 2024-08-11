import { Router } from "express";
import { getPosts, updatePost } from "../controllers/postController.js";
import { cacheLayer, invalidateCache } from "../middleware/redis.js";

const router = Router();

// Get all posts
router.route("/").get(cacheLayer, getPosts);

// Update post by id
router.route("/:id").put(invalidateCache, updatePost);

export default router;
