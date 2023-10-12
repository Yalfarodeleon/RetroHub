const express = require("express");
const { getPosts,getPostByID,createPost } = require("../controllers/postController");
const router = express.Router();

// Get a list of posts
router.get("/",getPosts);

// Get a single post
router.get("/:id",getPostByID);

// Post post
router.post("/", createPost)

module.exports = router;