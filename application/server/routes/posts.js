const express = require("express");
const { createPost } = require("../controllers/postController");
const router = express.Router();

// Get a list of posts
router.route("/").get(function (req, res) {
  res.json({yeah: "nah"})
});


// Get a single post
router.get("/:id", async (req, res) => {

});

// Post post
router.post("/", createPost)

module.exports = router;