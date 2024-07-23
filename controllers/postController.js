import asyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

export const getPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export const updatePost = asyncHandler(async (req, res) => {
  try {
    const postId = req.params.id;
    const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      res.status(404);
      throw new Error("Post not found");
    }
    res.json(updatedPost);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
